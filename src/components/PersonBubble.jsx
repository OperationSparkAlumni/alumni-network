import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navigate } from '@reach/router';

import colors from '../common/colors';
import anon from '../assets/anon.svg';

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledImg = styled.img`
  border: .25rem solid ${colors.lightPurple};
  border-radius: 50%;
  box-shadow: .35rem .35rem 0 ${colors.translucentLightPurple};
  height: 4rem;
  transition: 250ms ease-in;
  width: 4rem;
  :hover {
    box-shadow: 0 0;
    transform: translate(.35rem, .35rem);
  }
`;

const PersonBubble = ({ id, image, alt }) => (
  <StyledButton onClick={id ? () => navigate(`/profile/${id}`) : null}>
    <StyledImg src={image} alt={alt} />
  </StyledButton>
);

PersonBubble.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

PersonBubble.defaultProps = {
  image: anon,
  alt: "Anonymous user",
};

export default PersonBubble;
