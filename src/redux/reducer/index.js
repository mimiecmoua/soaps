import { combineReducers } from 'redux';
import handleCart from './handleCart'; // Assurez-vous que le chemin est correct

const rootReducer = combineReducers({
  cart: handleCart,
});

export default rootReducer;
