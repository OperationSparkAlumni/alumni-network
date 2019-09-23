import React from 'react';
import { Router } from '@reach/router';

import Home from '../Home';

const PublicRoutes = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default PublicRoutes;
