// selectors.js
import { createSelector } from 'reselect';

const cartSelector = state => state.handleCart;

export const getCartItems = createSelector(
  [cartSelector],
  (handleCart) => handleCart
);
