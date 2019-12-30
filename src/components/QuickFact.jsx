import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../common/colors';
import { Column } from '../common/styles';

const CaptionSpan = styled.span`
  color: ${colors.lightYellow};
  font-family: Atami-Regular;
  font-size: .75rem;
  text-transform: uppercase;
`;

const FactSpan = styled.span`
  padding: 0 0 .25rem .5rem;
`;

const QuickFact = ({ caption, fact }) => (
  <Column>
    <CaptionSpan>{caption}</CaptionSpan>
    <FactSpan>{fact}</FactSpan>
  </Column>
);

QuickFact.propTypes = {
  caption: PropTypes.string,
  fact: PropTypes.string,
};

QuickFact.defaultProps = {
  caption: 'Company',
  fact: 'A Great Place',
};

export default QuickFact;
