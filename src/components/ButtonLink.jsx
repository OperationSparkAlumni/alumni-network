import { Link } from '@reach/router';
import styled, { css } from 'styled-components';

import colors from '../common/colors';

const buttonStyle = css`
  background-color: ${({ color }) => {
    if (color === 'yellow') return colors.yellow;
    if (color === 'white') return colors.white;
    else return colors.lightPurple;
  }};
  border-radius: 5px;
  box-shadow: .25rem .25rem 0 ${({ color }) => color === 'yellow' ? colors.lightPurple : colors.yellow};
  color: ${({ color }) => color === 'yellow' || color === 'white' ? colors.darkPurple : colors.white};
  font-weight: 600;
  min-width: 4.5rem;
  padding: .75rem;
  text-align: center;
  text-decoration: none;
  transition: 250ms ease-in;
  :hover {
    box-shadow: 0 0;
    transform: translate(.25rem, .25rem);
  }
`;

export const ButtonLink = styled(Link)`${buttonStyle}`;

export const Button = styled.button`
  ${buttonStyle}
  border: none;
  cursor: pointer;
  font-family: source-sans-pro, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
`;

// export default ButtonLink;
