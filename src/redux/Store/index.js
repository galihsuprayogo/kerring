import { combineReducers, createStore } from 'redux';
import { loadingReducer, newsReducer } from '../Reducer';

const rootReducer = combineReducers({
  loadingReducer,
  newsReducer
});

export const store = createStore(rootReducer);
