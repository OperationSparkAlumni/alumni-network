import React from 'react';
import { Router, navigate } from '@reach/router';

import Home from '../Home';
import { useAuthContext } from './AuthContext';

const PublicRoutes = () => {
  const { isAuth } = useAuthContext();

  if (!isAuth) {
    navigate('/');
  }
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default PublicRoutes;
