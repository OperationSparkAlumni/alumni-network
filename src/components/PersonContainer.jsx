import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './Container';
import PersonBubbleExpanded from './PersonBubbleExpanded';
import QuickFact from './QuickFact';
import colors from '../common/colors';
import anon from '../assets/anon.svg';

const StyledDiv = styled.div`
  padding: 0 0 1rem 1rem;
`;

const StyledA = styled.a`
  color: ${colors.lightYellow};
  text-align: end;
`;

const PersonContainer = ({ heading, image, name, links, quickFacts, children }) => {
  const { linkedIn, gitHub, email, website } = links;
  const { cohort, company, role, location } = quickFacts;
  const { displayName, url } = website;
  return (
    <Container heading={heading}>
      <PersonBubbleExpanded image={image} linkedIn={linkedIn} gitHub={gitHub} email={email} name={name} />
      <StyledDiv>
        <QuickFact caption="Cohort" fact={cohort} />
        <QuickFact caption="Company" fact={company} />
        <QuickFact caption="Role" fact={role} />
        <QuickFact caption="Location" fact={location} />
      </StyledDiv>
      {children}
      <StyledA href={url} target="_blank" rel="noopener noreferrer">{displayName}</StyledA>
    </Container>
  );
};

PersonContainer.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    preferred: PropTypes.string,
  }),
  links: PropTypes.shape({
    linkedIn: PropTypes.string,
    gitHub: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.shape({
      displayName: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
  quickFacts: PropTypes.shape({
    cohort: PropTypes.string,
    company: PropTypes.string,
    role: PropTypes.string,
    location: PropTypes.string,
  }),
  children: PropTypes.node,
};

PersonContainer.defaultProps = {
  heading: '',
  image: anon,
  name: {
    first: 'Random', 
    last: 'Grad',
    preferred: 'Random',
  },
  links: {
    linkedIn: 'https://www.linkedin.com/',
    gitHub: 'https://github.com/',
    email: 'abc@def.com',
    name: 'Random Grad',
    website: {
      displayName: 'randomgrad.com',
      url: 'https://www.google.com/',
    },
  },
  quickFacts: {
    cohort: 'April 2018',
    company: 'A Great Place',
    role: 'Software Developer',
    location: 'New Orleans',
  },
  children: <div />,
};

export default PersonContainer;
