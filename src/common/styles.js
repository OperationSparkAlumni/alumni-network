import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from './colors';

const Row = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

Row.propTypes = {
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'initial']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'initial']),
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Row.defaultProps = {
  alignItems: 'initial',
  justifyContent: 'initial',
  margin: 'initial',
  padding: 'initial',
};

const Column = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

Column.propTypes = {
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'initial']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'initial']),
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Column.defaultProps = {
  alignItems: 'initial',
  justifyContent: 'initial',
  margin: 'initial',
  padding: 'initial',
};

const Heading = styled.h1`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  text-shadow: .25rem .25rem 0 ${({ textShadowColor }) => textShadowColor};
`;

Heading.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  textShadowColor: PropTypes.string,
};

Heading.defaultProps = {
  color: colors.white,
  fontSize: '3.5rem',
  margin: 'initial',
  textShadowColor: colors.translucentLightPurple,
};

export {
  Row,
  Column,
  Heading,
};