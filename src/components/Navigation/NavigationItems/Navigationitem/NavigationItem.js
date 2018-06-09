import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink 
      to={props.link}
      exact={props.exact}
      // note exact can be passed by itself and this will work, but make all NavigationItem links exact
      // instead by making it a prop on the wrapping component for just the route that needs to be exact
      // (the root / in our case) we can make it specific for this one instance and still flexible for
      // all other routes
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
