import { combineReducers, createStore } from 'redux';
import { loadingReducer } from '../Reducer';

const rootReducer = combineReducers({
  loadingReducer
});

export const store = createStore(rootReducer);
