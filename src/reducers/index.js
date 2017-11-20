import { combineReducers } from 'redux'
import { reducer as posts } from '../pages/posts'
import user from './auth'

const reducer = combineReducers({
  posts,
  user
})

export default reducer
