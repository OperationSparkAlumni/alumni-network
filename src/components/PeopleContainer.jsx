import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './Container';
import PersonBubble from './PersonBubble';
import alumniData from '../mockedData/alumni';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-columns: repeat(auto-fill, 4rem);
  justify-content: space-around;
  padding: 0 1rem 2rem 0;
`;

const PeopleContainer = ({ heading, people, children }) => {
  return (
    <Container heading={heading}>
      <GridContainer>
        {people.map(({ id, image }) => <PersonBubble image={image} id={id} key={id} />)}
      </GridContainer>
      {children}
    </Container>
  );
};

PeopleContainer.propTypes = {
  heading: PropTypes.string,
  people: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
};

PeopleContainer.defaultProps = {
  heading: '',
  people: alumniData,
  children: <div />,
};

export default PeopleContainer;
