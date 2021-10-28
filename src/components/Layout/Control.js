import React from 'react';

import Input from '../UI/Input';
import TipButton from '../UI/TipButton';

import iconDollar from '../../assets/icon-dollar.svg';
import iconPerson from '../../assets/icon-person.svg';

import classes from './Control.module.css';

const Control = () => {
  const preconfigTips = [
    5, 10, 15, 25, 50
  ];

  const calculateTip = () => {
    
  };

  return (
    <div className={classes.controls}>
      <h3 className={classes['control-title']}>Bill</h3>
      <Input icon={iconDollar} valueChanged={calculateTip} />
      <h3 className={classes['control-title']}>Select Tip %</h3>
      <div className={classes['tip-buttons-container']}>
        {preconfigTips.map(item => <TipButton tip={item} />)}
        <Input styles={
          {
            'width': '6.6em', 
            'height': '2.8em', 
            'border-radius': '4px'
          }} />
      </div>
      <h3 className={classes['control-title']}>Number of People</h3>
      <Input icon={iconPerson} />
    </div>
  );
}

export default Control;
