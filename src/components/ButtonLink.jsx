import { Link } from '@reach/router';
import styled, { css } from 'styled-components';

import colors from '../common/colors';

const buttonStyle = css`
  background-color: ${({ bgColor }) => bgColor ? bgColor : colors.lightPurple };
  border-radius: 5px;
  box-shadow: .25rem .25rem 0 ${({ shadowColor }) => shadowColor ? shadowColor : colors.yellow};
  color: ${({ textColor }) => textColor ? textColor : colors.white};
  font-size: ${({ large }) => large ? '2rem' : '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 600};
  min-width: 4.5rem;
  padding: ${({ large }) => large ? '1rem' : '.75rem'};
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
`;

// export default ButtonLink;
