import React from 'react';
import { Match } from '@reach/router';

import { ButtonLink } from './ButtonLink';

const NavLink = (props) => (
  <Match path={props.to}>
    {({ match }) => (
      <ButtonLink
        {...props}
        color={match ? 'yellow' : props.color}
      />
    )}
  </Match>
);

export default NavLink;
