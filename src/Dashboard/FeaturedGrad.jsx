import React from 'react';
import PropTypes from 'prop-types';

import PersonContainer from '../components/PersonContainer';
import anon from '../assets/anon.svg';

const FeaturedGrad = ({ grad }) => {
  const { image, name, links, description } = grad;
  return (
    <PersonContainer heading="Featured Grad" image={image} name={name} links={links}>
      <p>{description}</p>
    </PersonContainer>
  );
};

FeaturedGrad.propTypes = {
  grad: PropTypes.shape({
    image: PropTypes.string,
    links: PropTypes.shape({
      linkedIn: PropTypes.string,
      gitHub: PropTypes.string,
      email: PropTypes.string,
      website: PropTypes.shape({
        displayName: PropTypes.string,
        url: PropTypes.string,
      }),
    }),
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
      preferred: PropTypes.string,
    }),
    description: PropTypes.string,
  }),
};

FeaturedGrad.defaultProps = {
  grad: {
    image: anon,
    links: {
      linkedIn: 'https://www.linkedin.com/',
      gitHub: 'https://github.com/',
      email: 'abc@def.com',
      website: {
        displayName: 'randomgrad.com',
        url: 'https://www.google.com/',
      },
    },
    name: {
      first: 'Random',
      last: 'Grad',
      preferred: 'Random',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nSuspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n\nOdio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.',
  },
};

export default FeaturedGrad;
