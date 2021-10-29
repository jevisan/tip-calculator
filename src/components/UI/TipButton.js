import React, { useState } from 'react';

import classes from './TipButton.module.css';

const TipButton = props => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = event => {
    // if (!isSelected) {
    //   setIsSelected(true);
    // }
    props.onSelected(props.tip);
  };

  return (
    <div 
      className={`${classes['tip-button']} ${props.selected ? classes['tip-button__selected'] : ''}`} 
      onClick={clickHandler}
    >
      {props.tip}%
    </div>
  );
}

export default TipButton;
