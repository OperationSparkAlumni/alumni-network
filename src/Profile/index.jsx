import React from 'react';
import styled from 'styled-components';

import PersonContainer from '../components/PersonContainer';
import PeopleContainer from '../components/PeopleContainer';
import Container from '../components/Container';
import { Row, Column } from '../common/styles';

import alumniProfiles from '../mockedData/alumniProfiles';
import alumniData from '../mockedData/alumni';

const StyledP = styled.p`
  padding-bottom: 2rem;
`;

const Profile = ({ userId }) => {
  const alum = alumniProfiles[userId];
  const { image, name, links, quickFacts, description } = alum;
  const { first, last, preferred } = name;

  return (
    <Row justifyContent="space-evenly" padding="5rem 0 0">
      <Column>
        <PersonContainer heading="Quick Facts" image={image} name={name} links={links} quickFacts={quickFacts} />
        <PeopleContainer heading={`${preferred}'s Cohort`} people={alumniData} />
      </Column>
      <Column>
        <Container heading={`About ${first} ${last}`} large>
          <StyledP>{description}</StyledP>
        </Container>
      </Column>
    </Row>
  );
};

export default Profile;
