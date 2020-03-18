import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { useAuthContext } from '../common/AuthContext';
import colors from '../common/colors';
import { Column } from '../common/styles';
import caret from '../assets/caret.svg';
import PersonBubble from './PersonBubble';

const StyledColumn = styled(Column)`
  box-sizing: border-box;
  position: relative;
`;

const linkStyle = `
  font-size: .85rem;
  font-weight: 600;
  :hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  ${linkStyle};
  text-decoration: none;
`;

const StyledButton = styled.button`
  ${linkStyle};
  align-items: center;
  background: none;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  font-family: Source Sans Pro;
`;

const AnimatedImg = styled.img`
  padding-left: .25rem;
  padding-right: .25rem;
  transition: 250ms ease-in;
  transform: ${(props) => (props.expanded ? 'rotate(180deg)' : 'rotate(0deg)')}
`;

const NavMenu = styled.nav`
  align-items: center;
  background-color: ${colors.lightPurple};
  box-shadow: .35rem .35rem 0 ${colors.yellow};
  border-radius: 1.5rem 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  min-width: 5.75rem;
  padding: 1rem .25rem;
  position: absolute;
  top: 5.25rem;
  :before {
    content: " ";
    border-style: solid;
    border-width: 2rem 0 2rem 1.75rem;
    border-color: transparent transparent ${colors.lightPurple} transparent;
    position: absolute;
    right: 0;
    top: -4rem;
  }
  :after {
    content: " ";
    border-style: solid;
    border-width: 2rem 0 2rem 1.75rem;
    border-color: transparent transparent ${colors.yellow} transparent;
    position: absolute;
    right: -.35rem;
    top: -3.65rem;
    z-index: -1
  }
`;

const Line = styled.div`
  border-top: 1px solid ${colors.lightYellow};
  margin-bottom: .25rem;
  margin-top: .25rem;
  width: 4.75rem;
`;

const UserMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const { userData, onLogout } = useAuthContext();
  const { id, image } = userData;

  return (
    <StyledColumn>
      <StyledButton onClick={toggleExpanded}>
        <PersonBubble image={image} alt="logged-in user" />
        <AnimatedImg src={caret} alt="caret" expanded={expanded} />
      </StyledButton>
      {expanded && (
        <NavMenu>
          <StyledLink to={`/profile/${id}`}>My profile</StyledLink>
          <Line />
          <StyledButton>Settings</StyledButton>
          <Line />
          <StyledButton onClick={onLogout}>Sign out</StyledButton>
        </NavMenu>
      )}
    </StyledColumn>
  );
};

export default UserMenu;
