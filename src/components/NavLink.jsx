import React from 'react';
import { Match } from '@reach/router';

import { ButtonLink } from './ButtonLink';
import colors from '../common/colors';

const NavLink = (props) => (
  <Match path={props.to}>
    {({ match }) => (
      <ButtonLink
        {...props}
        bgColor={match ? colors.yellow : colors.lightPurple}
        shadowColor={match ? colors.lightPurple : colors.yellow}
        textColor={match ? colors.vDarkPurple : colors.white}
        fontWeight={600}
      />
    )}
  </Match>
);

export default NavLink;
