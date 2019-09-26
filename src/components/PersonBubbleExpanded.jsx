import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../common/colors';
import { Column, Row } from '../common/styles';
import anon from '../assets/anon.svg';
import linkedInLogo from '../assets/linked-in.svg';
import gitHubLogo from '../assets/github-brands.svg';
import envelope from '../assets/envelope-solid.svg';

const StyledImg = styled.img`
  border: .35rem solid ${colors.lightPurple};
  border-radius: 50%;
  box-shadow: .35rem .35rem 0 ${colors.translucentLightPurple};
  box-sizing: border-box;
  height: 15vw;
  width: 15vw;
  z-index: 1;
`;

const StyledA = styled.a`
  background-color: ${colors.lightPurple};
  border-radius: .25rem;
  box-shadow: .35rem .35rem 0 ${colors.translucentLightPurple};
  display: flex;
  justify-content: flex-end;
  margin-left: -2vw;
  padding: .5rem;
  width: 3.75vw;
`;

const LinkImg = styled.img`
  height: 1.5vw;
  width: auto;
`;

const StyledH3 = styled.h3`
  color: ${colors.white};
  font-size: 2rem;
  margin: -.75rem 0 1rem 0;
  text-shadow: .15rem .15rem 0 ${colors.purple};
  z-index: 2;
`;

const PersonBubbleExpanded = ({ image, linkedIn, gitHub, email, name }) => (
  <Column>
    <Row>
      <StyledImg src={image} alt={name} />
      <Column justifyContent="space-between" padding="2.75vw 0">
        <StyledA href={linkedIn} target="_blank" rel="noopener noreferrer"><LinkImg src={linkedInLogo} alt="LinkedIn" /></StyledA>
        <StyledA href={gitHub} target="_blank" rel="noopener noreferrer"><LinkImg src={gitHubLogo} alt="GitHub" /></StyledA>
        <StyledA href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"><LinkImg src={envelope} alt="email envelope" /></StyledA>
      </Column>
    </Row>
    <StyledH3>{name}</StyledH3>
  </Column>
);

PersonBubbleExpanded.propTypes = {
  image: PropTypes.string,
  linkedIn: PropTypes.string,
  gitHub: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
};

PersonBubbleExpanded.defaultProps = {
  image: anon,
  linkedIn: 'https://www.linkedin.com/',
  gitHub: 'https://github.com/',
  email: 'abc@def.com',
  name: 'Random Grad',
}

export default PersonBubbleExpanded;
