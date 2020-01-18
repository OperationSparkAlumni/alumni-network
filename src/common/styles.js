import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import colors from './colors';

const flexStyles = css`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex: ${({ flex1 }) => flex1 ? '1' : 'initial'};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
`;

const flexPropTypes = {
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'initial']),
  flex1: PropTypes.bool,
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'initial']),
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};

const flexDefaultProps = {
  alignItems: 'initial',
  flex1: false,
  justifyContent: 'initial',
  margin: 'initial',
  padding: 'initial',
  width: 'initial',
}

const Row = styled.div`${flexStyles}`;

Row.propTypes = flexPropTypes;

Row.defaultProps = flexDefaultProps;

const Column = styled.div`
  ${flexStyles}
  flex-direction: column;
`;

Column.propTypes = flexPropTypes;

Column.defaultProps = flexDefaultProps;

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