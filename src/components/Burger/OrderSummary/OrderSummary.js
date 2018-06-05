import React from 'react';

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
    </React.Fragment>
  );
};

export default orderSummary;
