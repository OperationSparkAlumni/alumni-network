import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from '../components/Container';
import PersonBubbleExpanded from '../components/PersonBubbleExpanded';
import colors from '../common/colors';
import anon from '../assets/anon.svg';

const StyledA = styled.a`
  color: ${colors.lightYellow};
  text-align: end;
`;

const FeaturedGrad = ({ grad }) => {
  const { image, linkedIn, gitHub, email, name, description, website } = grad;
  const { displayName, url } = website;
  return (
    <Container heading="Grad of the Month">
      <PersonBubbleExpanded image={image} linkedIn={linkedIn} gitHub={gitHub} email={email} name={name} />
      <p>{description}</p>
      <StyledA href={url} target="_blank" rel="noopener noreferrer">{displayName}</StyledA>
    </Container>
  );
};

FeaturedGrad.propTypes = {
  grad: PropTypes.shape({
    image: PropTypes.string,
    linkedIn: PropTypes.string,
    gitHub: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    website: PropTypes.shape({
      displayName: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
};

FeaturedGrad.defaultProps = {
  grad: {
    image: anon,
    linkedIn: 'https://www.linkedin.com/',
    gitHub: 'https://github.com/',
    email: 'abc@def.com',
    name: 'Random Grad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nSuspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n\nOdio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.',
    website: {
      displayName: 'randomgrad.com',
      url: 'https://www.google.com/',
    },
  },
};

export default FeaturedGrad;
