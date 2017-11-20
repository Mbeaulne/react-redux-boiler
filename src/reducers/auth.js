import { createReducer } from 'redux-act'

import {
  addUser,
  signOut
} from '../actions'

export default createReducer({
  [addUser]: (state, user) => ({
    isAuthed: true,
    ...user
  }),
  [signOut]: state =>({
    isAuthed: false
  })
}, {
  isAuthed: false,
  user: {}
})
