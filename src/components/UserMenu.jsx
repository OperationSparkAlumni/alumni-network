import React, { useState } from 'react';
import styled from 'styled-components';

import { useAuthContext } from '../common/AuthContext';
import colors from '../common/colors';
import { Column } from '../common/styles';
import caret from '../assets/caret.svg';

const StyledColumn = styled(Column)`
  box-sizing: border-box;
  position: relative;
`;

const StyledButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  font-size: .85rem;
  font-weight: 600;
`;

const ProfileImg = styled.img`
  border: .25rem solid ${colors.lightPurple};
  border-radius: 50%;
  box-shadow: .35rem .35rem 0 ${colors.translucentLightPurple};
  height: 4rem;
  width: auto;
`;

const AnimatedImg = styled.img`
  padding-left: .25rem;
  padding-right: .25rem;
  transition: 250ms ease-in;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'}
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
  const { image } = userData;

  return (
    <StyledColumn>
      <StyledButton onClick={toggleExpanded}>
        <ProfileImg src={image} alt="logged-in user" />
        <AnimatedImg src={caret} alt="caret" expanded={expanded} />
      </StyledButton>
      {expanded && (
        <NavMenu>
          <StyledButton>My profile</StyledButton>
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
