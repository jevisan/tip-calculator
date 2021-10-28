import React from 'react';

import classes from './TotalsCard.module.css';

const TotalsCard = () => {
  return (
    <div className={classes['totals-card']}>
      <div className={classes['tip-section']}>
        <div className={classes['tip-section__titles']}>
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>
        <div className={classes['tip-section__amount']}>
          $4.27
        </div>
      </div>
      <div className={classes['tip-section']}>
        <div className={classes['tip-section__titles']}>
          <h3>Total</h3>
          <p>/ person</p>
        </div>
        <div className={classes['tip-section__amount']}>
          $32.79
        </div>
      </div>
      <button>RESET</button>
    </div>
  );
}

export default TotalsCard;
