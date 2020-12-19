import {combineReducers} from 'redux';
import user from './user/user.reducer';
import restaurant from './restaurant/restaurant.reducer';

const rootReducer = combineReducers({
  user,
  restaurant,
});

export default rootReducer;
