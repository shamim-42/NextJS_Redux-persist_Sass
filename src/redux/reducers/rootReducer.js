import {combineReducers} from 'redux';
import user from 'redux/reducers/userReducer';

const rootReducer = combineReducers({
  user,
});
export default rootReducer;
