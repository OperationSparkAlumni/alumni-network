import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import colors from '../common/colors';
import { Column } from '../common/styles';
import handshake from '../assets/handshake.svg';

const StyledColumn = styled(Column)`
  align-items: center;
  background-color: ${colors.white};
  border: .5rem solid ${colors.lightYellow};
  border-radius: 50%;
  box-shadow: 1rem 1rem 0 ${colors.translucentYellow};
  box-sizing: border-box;
  height: 25vw;
  justify-content: space-between;
  margin-top: ${({ marginTop }) => marginTop}vw;
  padding: 4vw 0;
  width: 25vw;
`;

const StyledImg = styled.img`
  height: 4vw;
  width: auto;
`;

const StyledH2 = styled.h2`
  font-family: "Atami-bold";
  font-size: 3vw;
  margin: 0;
`;

const StyledP = styled.p`
  color: ${colors.purple};
  font-size: 1.5vw;
  margin: 0;
  padding: 0 2.75vw;
  text-align: center;
`;

const FeatureBubble = ({ icon, heading, caption, marginTop }) => (
  <StyledColumn marginTop={marginTop}>
    <StyledImg src={icon} alt="icon" />
    <StyledH2>{heading}</StyledH2>
    <StyledP>{caption}</StyledP>
  </StyledColumn>
);

FeatureBubble.propTypes = {
  icon: PropTypes.string,
  heading: PropTypes.string,
  caption: PropTypes.string,
  marginTop: PropTypes.number,
};

FeatureBubble.defaultProps = {
  icon: handshake,
  heading: 'Network',
  caption: 'Meet fellow alumni and learn about their companies and positions',
  marginTop: 0,
};

export default FeatureBubble;
