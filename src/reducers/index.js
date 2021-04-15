import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headerNavBar from './headerNavBarReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  form,
  headerNavBar,
  user
});

export default rootReducer;