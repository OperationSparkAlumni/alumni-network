import React from 'react';

import { useAuthContext } from '../common/AuthContext';
import { Heading } from '../common/styles';

function Dashboard() {
  const { userData } = useAuthContext();
  const { nameFirst, nameLast } = userData;

  return (
    <div>
      <Heading>Hello, {`${nameFirst} ${nameLast}`}!</Heading>
    </div>
  );
}

export default Dashboard;
