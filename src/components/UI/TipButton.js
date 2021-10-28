import React from 'react';

import classes from './TipButton.module.css';

const TipButton = props => {
  return (
    <div className={classes['tip-button']}>{props.tip}%</div>
  );
}

export default TipButton;
