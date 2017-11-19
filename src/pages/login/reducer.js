import { createReducer } from 'redux-act'

import {
  addUser,
  signOut
} from './actions'

export default createReducer({
  [addUser]: (state, user) => {
    console.log('user', user)
  return ({
    ...state,
    isAuthed: true,
    user
  })
  },
  [signOut]: state =>({
    ...state,
    isAuthed: false,
    user: {}
  })
}, {
  isAuthed: false,
  user: {}
})
