import React from 'react';
import { ScrollLink } from 'react-scroll';

export const LinkToAnchor = ScrollLink(props => (
  <a href="#" {...props}>
    {props.children}
  </a>
));
