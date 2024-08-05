import { createStore, combineReducers } from 'redux';
import handleCart from './reducers/handleCart';

const rootReducer = combineReducers({
  cart: handleCart,
  
});

const store = createStore(rootReducer);

export default store;
