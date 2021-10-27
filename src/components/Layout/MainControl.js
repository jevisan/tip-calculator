import React from 'react';
import Card from '../UI/Card';
import Input from '../UI/Input';
import TipButton from '../UI/TipButton';

import classes from './MainControl.module.css';
import iconDollar from '../../assets/icon-dollar.svg';

const MainControl = props => {
  const preconfigTips = [
    5, 10, 15, 25, 50
  ];
  return (
    <Card>
      <div className={classes.controls}>
        <h3 className={classes['control-title']}>Bill</h3>
        <Input icon={iconDollar} />
        <h3 className={classes['control-title']}>Select Tip %</h3>
        <div className={classes['tip-buttons-container']}>
          {preconfigTips.map(item => <TipButton tip={item} />)}
          <Input styles={{'width': '6em'}} />
        </div>
        <h3 className={classes['control-title']}>Number of People</h3>
        <Input />
      </div>
    </Card>
  );
}

export default MainControl;
