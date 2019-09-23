import styled from 'styled-components';

import colors from './colors';

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: ${({ color }) => color ? color : colors.white};
  font-family: Atami-Bold;
  font-size: ${({ fontSize }) => fontSize ? fontSize : '3.5rem'};
  text-shadow: .25rem .25rem 0 ${({ textShadowColor }) => textShadowColor ? textShadowColor : colors.translucentLightPurple};
`;

export {
  Row,
  Column,
  Heading,
};