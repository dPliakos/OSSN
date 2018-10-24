import React from 'react';
import {Link} from 'gatsby';

import {feather} from './../../../utils/feather';

export const LabelWithIcon = (props) => {
  return(
    <div>

      <div> {feather.icons.circle.toSvg()} {props.label} </div>
    </div>
  );
};

export const LinkWithIcon = (props) => {
  return(
    <a href={props.link}>
      <div> {feather.icons.circle.toSvg()} {props.label} </div>
    </a>
  );
};

export const InternalLinkWithIcon = (props) => {
  return(
    <Link to={props.link}>
      <div> {feather.icons.circle.toSvg()} {props.label} </div>
    </Link>
  );
};
