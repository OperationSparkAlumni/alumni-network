import React from 'react';

import Layout from './components/Layout';
import { AuthProvider } from './common/AuthContext';
import PublicRoutes from './common/PublicRoutes';
import ProtectedRoutes from './common/ProtectedRoutes';


function App() {
  return (
    <AuthProvider>
      <Layout>
        <PublicRoutes />
        <ProtectedRoutes />
      </Layout>
    </AuthProvider>
  );
}

export default App;
