import React from 'react';
import classes from './Order.css';

const outputIngredients = (ingredients) => {
    const ingredientsArray = [];
    for(let ingredientName in ingredients) {
        ingredientsArray.push({
            name: ingredientName,
            quantity: ingredients[ingredientName]
        });
    }
    return ingredientsArray.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '2px 12px'
            }}
            key={ig.name}>{ig.name} ({ig.quantity})</span>
    })
}

const order = (props) => (
    <div className={classes.Order}>
        <p>Ingredients: {outputIngredients(props.ingredients)}</p>
        <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
);

export default order;