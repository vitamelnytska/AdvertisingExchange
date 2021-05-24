import { combineReducers } from 'redux';
import { blursReducer } from './ducks/blurs/reducer';
import { tagsReducer } from './ducks/tags/reducer';
import { blurReducer } from './ducks/blur/reducer';
import { userReducer } from './ducks/user/userReducer';
import { usersReducer } from './ducks/users/reducer';

export const rootReducer = combineReducers({
  blurs: blursReducer,
  blur: blurReducer,
  tags: tagsReducer,
  user: userReducer,
  users: usersReducer,
});
