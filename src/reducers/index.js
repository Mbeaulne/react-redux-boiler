import { combineReducers } from 'redux';
import user from './user';
import { reducer as posts } from '../pages/posts';

const reducer = combineReducers({
  user,
  posts
})

export default reducer;