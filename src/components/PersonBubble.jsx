import React from 'react';
import styled from 'styled-components';

import colors from '../common/colors';

const StyledImg = styled.img`
  border: .25rem solid ${colors.lightPurple};
  border-radius: 50%;
  box-shadow: .35rem .35rem 0 ${colors.translucentLightPurple};
  height: 4rem;
  width: auto;
`;

const PersonBubble = ({ image, alt }) => (
  <StyledImg src={image} alt={alt} />
);

export default PersonBubble;
