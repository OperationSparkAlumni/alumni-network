import React from 'react';
import { Router, Redirect, navigate } from '@reach/router';

import { useAuthContext } from './AuthContext';
import Dashboard from '../Dashboard';
import Directory from '../Directory';
import Jobs from '../Jobs';
import Profile from '../Profile';

const ProtectedRoutes = () => {
  const { isAuth } = useAuthContext();

  if (!isAuth) {
    return navigate('/');
  }
  return (
    <Router>
      <Redirect from="/" to="/dashboard" />
      <Dashboard path="/dashboard" />
      <Directory path="/alumni-directory" />
      <Jobs path="/jobs" />
      <Profile path="/profile/:userId" />
    </Router>
  );
};

export default ProtectedRoutes;
