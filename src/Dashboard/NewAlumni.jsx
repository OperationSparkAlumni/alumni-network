import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from '../components/Container';
import PersonBubble from '../components/PersonBubble';
import { Row } from '../common/styles';
import { ButtonLink } from '../components/ButtonLink';
import colors from '../common/colors';
import alumniData from '../mockedData/alumni';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-columns: repeat(auto-fill, 4rem);
  justify-content: space-around;
  padding: 0 1rem 2rem 0;
`;

const StyledSpan = styled.span`
  color: ${colors.lightYellow};
  font-weight: bold;
`;

const NewAlumni = ({ alumni }) => {
  return (
    <Container heading="Meet New Alumni">
      <GridContainer>
        {alumni.map(({ id, image }) => <PersonBubble image={image} id={id} key={id} />)}
      </GridContainer>
      <Row alignItems="center" justifyContent="flex-end">
        <StyledSpan>Find more in our&nbsp;</StyledSpan>
        <ButtonLink to="/alumni-directory" small bgColor={colors.white} textColor={colors.vDarkPurple} fontWeight={700}>Directory</ButtonLink>
      </Row>
    </Container>
  );
};

NewAlumni.propTypes = {
  alumni: PropTypes.arrayOf(PropTypes.object),
};

NewAlumni.defaultProps = {
  alumni: alumniData,
};

export default NewAlumni;
