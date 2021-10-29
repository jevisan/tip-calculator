import React, { useState } from 'react';

import classes from './Input.module.css';

const Input = (props) => {

  const [value, setValue] = useState(0);

  const changeValueHandler = event => {
    setValue(event.target.value);
    console.log(event.target.value);
    props.onValueChanged(event.target.name, event.target.value);
  };
  
  return (
    <div className={classes.input} style={props.styles}>
      <img src={props.icon} />
      <input 
        name={props.name} 
        type="text" 
        value={value}
        onChange={changeValueHandler}
      />
    </div>
  );
};

export default Input;
