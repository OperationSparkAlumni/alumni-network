import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PeopleContainer from '../components/PeopleContainer';
import { Row } from '../common/styles';
import { ButtonLink } from '../components/ButtonLink';
import colors from '../common/colors';

import alumniData from '../mockedData/alumni';

const StyledSpan = styled.span`
  color: ${colors.lightYellow};
  font-weight: bold;
`;

const NewAlumni = ({ alumni }) => {
  return (
    <PeopleContainer heading="Meet New Alumni" people={alumni}>
      <Row alignItems="center" justifyContent="flex-end">
        <StyledSpan>Find more in our&nbsp;</StyledSpan>
        <ButtonLink to="/alumni-directory" small bgColor={colors.white} textColor={colors.vDarkPurple} fontWeight={700}>Directory</ButtonLink>
      </Row>
    </PeopleContainer>
  );
};

NewAlumni.propTypes = {
  alumni: PropTypes.arrayOf(PropTypes.object),
};

NewAlumni.defaultProps = {
  alumni: alumniData,
};

export default NewAlumni;
