import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../common/colors';
import { Column } from '../common/styles';

const StyledColumn = styled(Column)`
  background-color: ${colors.darkPurple};
  border-radius: 0 8rem 0 8rem;
  box-shadow: .5rem .5rem 0 ${colors.lightPurple};
  box-sizing: border-box;
  margin-bottom: 3rem;
  padding: ${({ hasHeading }) => hasHeading ? '0 2rem 1rem' : '2.5rem 2rem 1rem'};
  width: ${({ large }) => large ? '50vw' : '25vw'};
`;

const StyledH2 = styled.h2`
  color: ${colors.lightYellow};
  font-size: ${({ large }) => large ? '3rem' : '2.25rem'};
  margin: ${({ large }) => large ? '-1.25rem 0 1.5rem -3rem' : '-1rem 0 1rem -2.5rem'};
  text-shadow: .25rem .25rem 0 ${colors.vDarkPurple};
`;

const Container = ({ large, heading, children }) => (
  <StyledColumn large={large} hasHeading={!!heading}>
    {heading && <StyledH2 large={large}>{heading}</StyledH2>}
    <Column>
      {children}
    </Column>
  </StyledColumn>
);

Container.propTypes = {
  large: PropTypes.bool,
  heading: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  large: false,
  heading: '',
  children: <div />,
};

export default Container;
