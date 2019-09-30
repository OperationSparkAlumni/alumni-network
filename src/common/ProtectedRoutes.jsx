import React from 'react';
import { Router, Redirect } from '@reach/router';

import { useAuthContext } from './AuthContext';
import Dashboard from '../Dashboard';
import Directory from '../Directory';
import Jobs from '../Jobs';
import Profile from '../Profile';

const ProtectedRoutes = () => {
  const { isAuth } = useAuthContext();

  return (
    <Router>
      {isAuth ? <Redirect from="/" to="/dashboard" /> :
        <Redirect from="/dashboard" to="/" />
      }
      <Dashboard path="/dashboard" />
      {!isAuth && <Redirect from="/alumni-directory" to="/" />}
      <Directory path="/alumni-directory" />
      {!isAuth && <Redirect from="/jobs" to="/" />}
      <Jobs path="/jobs" />
      {!isAuth && <Redirect from="/profile" to="/" />}
      <Profile path="/profile/:userId" />
    </Router>
  );
};

export default ProtectedRoutes;
