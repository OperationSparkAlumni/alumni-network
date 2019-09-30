import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from '../components/Container';
import QuickFact from '../components/QuickFact';
import { ButtonLink } from '../components/ButtonLink';
import { Row, Column } from '../common/styles';
import colors from '../common/colors';

const ApplyButton = styled.a`
  align-items: center;
  background-color: ${colors.yellow};
  border-radius: 50%;
  box-shadow: .25rem .25rem 0 ${colors.translucentYellow};
  color: ${colors.darkPurple};
  display: flex;
  font-family: Atami-Bold;
  height: 3rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  transition: 250ms ease-in;
  width: 3rem;
  :hover {
    box-shadow: 0 0;
    transform: translate(.25rem, .25rem);
  }
`;

const DescriptionP = styled.p`
  font-size: .9rem;
`;

const StyledSpan = styled.span`
  color: ${colors.lightYellow};
  font-weight: bold;
`;

const FeaturedJob = ({ jobListing }) => {
  const { company, role, salary, location, description, applyLink } = jobListing;
  return (
    <Container heading="Featured Job">
      <Row alignItems="center" justifyContent="space-between" width="100%">
        <Column>
          <QuickFact caption="company" fact={company} />
          <QuickFact caption="role" fact={role} />
          <QuickFact caption="salary" fact={salary} />
          <QuickFact caption="location" fact={location} />
        </Column>
        <Column alignItems="center" flex1>
          <ApplyButton href={applyLink} target="_blank" rel="noopener noreferrer">Apply Here!</ApplyButton>
        </Column>
      </Row>
      <DescriptionP>{description}</DescriptionP>
      <Row alignItems="center" justifyContent="flex-end">
        <StyledSpan>Find more on our&nbsp;</StyledSpan>
        <ButtonLink to="/jobs" small bgColor={colors.white} textColor={colors.vDarkPurple} fontWeight={700}>Job Board</ButtonLink>
      </Row>
    </Container>
  );
};

FeaturedJob.propTypes = {
  jobListing: PropTypes.shape({
    company: PropTypes.string,
    role: PropTypes.string,
    salary: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    applyLink: PropTypes.string,
  }),
};

FeaturedJob.defaultProps = {
  jobListing: {
    company: 'A Great Place',
    role: 'Software Engineer',
    salary: '$100,000 - $150,000',
    location: 'Remote',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nSuspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.',
    applyLink: 'https://www.indeed.com/',
  },
};

export default FeaturedJob;
