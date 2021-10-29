import React from 'react';

import classes from './TotalsCard.module.css';

const TotalsCard = props => {
  return (
    <div className={classes['totals-card']}>
      <div className={classes['tip-section']}>
        <div className={classes['tip-section__titles']}>
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>
        <div className={classes['tip-section__amount']}>
          ${props.tipPerPerson.toFixed(2)}
        </div>
      </div>
      <div className={classes['tip-section']}>
        <div className={classes['tip-section__titles']}>
          <h3>Total</h3>
          <p>/ person</p>
        </div>
        <div className={classes['tip-section__amount']}>
          ${props.totalPerPerson.toFixed(2)}
        </div>
      </div>
      <button>RESET</button>
    </div>
  );
}

export default TotalsCard;
