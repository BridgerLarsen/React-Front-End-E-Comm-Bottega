import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headerNavBar from './headerNavBarReducer';

const rootReducer = combineReducers({
  form,
  headerNavBar
});

export default rootReducer;