import { alumDataReducer } from './Reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  alumData: alumDataReducer
});

export default rootReducer;
