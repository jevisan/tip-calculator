import React, { useState } from 'react';

import Card from '../UI/Card';
import TotalsCard from './TotalsCard';
import Control from './Control';

import classes from './MainControl.module.css';
import logo from '../../assets/logo.svg';

const MainControl = () => {
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const totalsChangeHandler = (tipPerPerson, totalPerPerson) => {
    setTipPerPerson(tipPerPerson);
    setTotalPerPerson(totalPerPerson);
  };

  return (
    <div className={classes.container}>
      <img src={logo} className={classes.logo} />
      <Card>
        <Control
          onValuesChange={totalsChangeHandler}
        />
        <TotalsCard 
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
        />
      </Card>
    </div>
  );
}

export default MainControl;
