import React from 'react';

import classes from './Input.module.css';

const Input = props => {
  return (
    <div className={classes.input} style={props.styles}>
      <img src={props.icon} />
      <input type="text" />
    </div>
  );
}

export default Input;
