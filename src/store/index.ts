import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

// The initial state is handled by the reducers
const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk),
);

export default store;
