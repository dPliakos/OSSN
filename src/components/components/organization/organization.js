import React from 'react';
import ShadowBox from './../shadow-box/shadow-box';

const Organization = (props) => {
  if (!props.organization) {
    return <div> organization not found error </div>
  }

  const classes = `${props.className}`
  return (
    <ShadowBox className={classes}>
      <img  src={props.organization.image || "#"} width="100px" alt={props.organization.title}/> <br />
      <a href={props.organization.link || "#"} > {props.organization.title} </a>
      <p>
        {props.organization.descripion}
      </p>
    </ShadowBox>
  );
}

export default Organization;
