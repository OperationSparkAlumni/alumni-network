import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Heading } from '../common/styles';
import colors from '../common/colors';

const Profile = ({ userId }) => (
  <Heading>{userId}'s Profile</Heading>
);

export default Profile;
