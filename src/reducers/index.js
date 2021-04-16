import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headerNavBar from './headerNavBarReducer';
import user from './userReducer';
import shop from './shopReducer';

const rootReducer = combineReducers({
  form,
  headerNavBar,
  user,
  shop
});

export default rootReducer;