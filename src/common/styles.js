import styled from 'styled-components';

const Row = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Column = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Heading = styled.h1`
  color: ${({ color }) => color};
  font-family: Atami-Bold;
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  text-shadow: .25rem .25rem 0 ${({ textShadowColor }) => textShadowColor};
`;

export {
  Row,
  Column,
  Heading,
};