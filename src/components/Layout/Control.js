import React from 'react';

import classes from './Control.module.css';

const Control = props => {
  return (
    <div>
      <h3 className={classes['control-title']}>{props.title}</h3>
      {props.children}
    </div>
  );
}

export default Control;
