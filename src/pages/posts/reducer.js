import { createReducer } from 'redux-act';

import {
    addPosts
} from './actions';

export default createReducer({
    [addPosts]: (state, payload) =>({ ...state,  payload})
  }, {post: 'hey dudes'});