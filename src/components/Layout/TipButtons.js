import React, { useState } from 'react';

import TipButton from '../UI/TipButton';

import classes from './TipButtons.module.css';

const TipButtons = props => {
  const [tips, setTips] = useState([
    { value: 5, selected: false },
    { value: 10, selected: false }, 
    { value: 15, selected: false }, 
    { value: 25, selected: false }, 
    { value: 50, selected: false }
  ]);

  const selectedHandler = value => {
    setTips(tips.map(item => {
      if (item.value === value) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    }));
    console.log(value);
    props.onSelected(null, value);
  };
  
  return (
    <div className={classes['tip-buttons-container']}>
      {tips.map(item =>
        <TipButton
          tip={item.value}
          selected={item.selected}
          onSelected={selectedHandler}
        />
      )}
    </div>
  );
}

export default TipButtons;
