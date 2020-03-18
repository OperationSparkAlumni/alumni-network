import { Link } from '@reach/router';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../common/colors';

const buttonStyle = css`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  box-shadow: .25rem .25rem 0 ${({ shadowColor }) => shadowColor};
  color: ${({ textColor }) => textColor};
  font-size: ${({ large }) => (large ? '2rem' : '1rem')};
  font-weight: ${({ fontWeight }) => fontWeight};
  min-width: 4.5rem;
  padding: ${({ large, small }) => {
    if (large) return '1rem';
    if (small) return '.5rem';
    return '.75rem';
  }};
  text-align: center;
  text-decoration: none;
  transition: 250ms ease-in;
  :hover {
    box-shadow: 0 0;
    transform: translate(.25rem, .25rem);
  }
`;

const buttonPropTypes = {
  bgColor: PropTypes.string,
  fontWeight: PropTypes.string,
  large: PropTypes.bool,
  shadowColor: PropTypes.string,
  small: PropTypes.bool,
  textColor: PropTypes.string,
};

const buttonDefaultProps = {
  bgColor: colors.lightPurple,
  fontWeight: 'bold',
  large: false,
  shadowColor: colors.yellow,
  small: false,
  textColor: colors.white,
};

export const ButtonLink = styled(Link)`${buttonStyle}`;

ButtonLink.propTypes = buttonPropTypes;

ButtonLink.defaultProps = buttonDefaultProps;

export const Button = styled.button`
  ${buttonStyle}
  border: none;
  cursor: pointer;
  font-family: 'Source Sans Pro', BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

Button.propTypes = buttonPropTypes;

Button.defaultProps = buttonDefaultProps;

// export default ButtonLink;
