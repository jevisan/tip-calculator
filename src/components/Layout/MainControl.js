import React from 'react';

import Card from '../UI/Card';
import TotalsCard from './TotalsCard';
import Control from './Control';

import classes from './MainControl.module.css';
import logo from '../../assets/logo.svg';

const MainControl = () => {
  return (
    <div className={classes.container}>
      <img src={logo} className={classes.logo} />
      <Card>
        <Control />
        <TotalsCard />
      </Card>
    </div>
  );
}

export default MainControl;
