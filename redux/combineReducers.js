import { combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import timerReducer from './reducers/timerReducer';
import signInReducer from './reducers/signInReducer';

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  signIn: signInReducer,
};

export default combineReducers(reducers);
