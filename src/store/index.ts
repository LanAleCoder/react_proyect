import {createStore, combineReducers} from 'redux';
import reducers from './reducers';

const RootReducers = combineReducers({
  //Reducers
  reducers,
});

export const store = createStore(RootReducers);
