import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import colors from '../common/colors';
import { Row, Column } from '../common/styles';
import logoTransparent from '../assets/logo-transparent.svg';

const StyledDiv = styled.div`
  padding: 1rem;
`;

const StyledFooter = styled.footer`
  background-color: ${colors.purple};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${colors.white};
  display: flex;
  font-size: .75rem;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
`;

const StyledRow = styled(Row)`
  min-width: 30%;
  justify-content: space-between;
`;

const linkStyle = `
  color: ${colors.white};
  font-size: 1rem;
  text-decoration: none;
`;

const StyledA = styled.a`${linkStyle}`;

const StyledLink = styled(Link)`${linkStyle}`;

function Footer() {
  return (
    <StyledDiv>
      <StyledFooter>
        <Column>
          <Link to="/"><img src={logoTransparent} alt="Operation Spark Alumni logo" /></Link>
          <span>&copy; Operation Spark Alumni Board 2019</span>
        </Column>
        <StyledRow>
          <Column>
            <StyledA href="https://github.com/OperationSparkAlumni" target="_blank" rel="noopener noreferrer">Github</StyledA>
            <StyledA href="https://slack.com/" target="_blank" rel="noopener noreferrer">Slack</StyledA>
            <StyledA href="https://operationspark.org/" target="_blank" rel="noopener noreferrer">Operation Spark</StyledA>
            <StyledA href="https://greenlight.operationspark.org/" target="_blank" rel="noopener noreferrer">Greenlight</StyledA>
          </Column>
          <Column>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/dashboard">Dashboard</StyledLink>
            <StyledLink to="/alumni-directory">Alumni Directory</StyledLink>
            <StyledLink to="/jobs">Job Boards</StyledLink>
          </Column>
        </StyledRow>
      </StyledFooter>
    </StyledDiv>
  );
}

export default Footer;
