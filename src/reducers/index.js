import { combineReducers } from 'redux'
import { reducer as posts } from '../pages/posts'
import { reducer as user } from '../pages/login'

const reducer = combineReducers({
  posts,
  user
})

export default reducer
