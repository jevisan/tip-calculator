import React, { useState, useEffect } from 'react';

import Input from '../UI/Input';

import iconDollar from '../../assets/icon-dollar.svg';
import iconPerson from '../../assets/icon-person.svg';

import classes from './Control.module.css';
import TipButtons from './TipButtons';

const Control = props => {
  const [billValue, setBillValue] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    console.log(billValue, percentage, peopleNumber);
    let totalPerPerson = 0;
    let tipPerPerson = 0;
    if (billValue && percentage && peopleNumber) {
      totalPerPerson = billValue / peopleNumber;
      tipPerPerson = (percentage * billValue / 100) / peopleNumber;
    }
    props.onValuesChange(tipPerPerson, totalPerPerson);
  }, [billValue, peopleNumber, percentage]);

  const valuesChangedHandler = (name, value) => {
    if (name === 'bill') {
      setBillValue(value);
    } else if (name === 'custom-persentage') {
      setPercentage(value)
    } else if (name === 'people') {
      setPeopleNumber(value);
    } else {
      setPercentage(value);
    }
  };

  return (
    <div className={classes.controls}>
      <h3 className={classes['control-title']}>Bill</h3>
      <Input
        name="bill"
        icon={iconDollar}
        onValueChanged={valuesChangedHandler}
      />
      <h3 className={classes['control-title']}>Select Tip %</h3>
      <div className={classes['tip-buttons-container']}>
        <TipButtons
          onSelected={valuesChangedHandler}
        />
      </div>
      <h3 className={classes['control-title']}>Number of People</h3>
      <Input
        name="people"
        value={peopleNumber}
        icon={iconPerson}
        onValueChanged={valuesChangedHandler}
      />
    </div>
  );
}

export default Control;
