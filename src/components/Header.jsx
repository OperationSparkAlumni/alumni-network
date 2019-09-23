import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { useAuthContext } from '../common/AuthContext';
import NavLink from './NavLink';
import { Button } from './ButtonLink';
import UserMenu from './UserMenu';
import logo from '../assets/logo.svg';

const StyledHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  `;

const buttonContainerStyle = `
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
  
const IsAuthDiv = styled.div`
  ${buttonContainerStyle}
  width: 100%;
`;

const StyledNav = styled.nav`
  ${buttonContainerStyle}
  min-width: 22rem;
  padding-left: 2rem;
`;

const LoginButtonContainer = styled.div`
  ${buttonContainerStyle}
  min-width: 12rem;
`;

function Header() {
  const { isAuth, onLogin } = useAuthContext();

  return (
    <StyledHeader>
      <Link to="/"><img src={logo} alt="Operation Spark Alumni logo" /></Link>
      {isAuth ? (
        <IsAuthDiv>
          <StyledNav>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/alumni-directory">Directory</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
          </StyledNav>
          <UserMenu />
        </IsAuthDiv>
      ) : (
        <LoginButtonContainer>
          <Button onClick={onLogin} color="yellow">Sign In</Button>
          <Button onClick={onLogin}>Sign Up</Button>
        </LoginButtonContainer>
      )}
    </StyledHeader>
  );
}

export default Header;
