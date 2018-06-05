import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>;
    });
  return (
    <React.Fragment>
      <h3>Order summary</h3>
      <p>Your order consists of:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <Button clicked={props.purchaseCancel} btnType='Danger'>CANCEL</Button>
      <Button clicked={props.purchaseContinue} btnType='Success'>CONFIRM</Button>
    </React.Fragment>
  );
};

export default orderSummary;
