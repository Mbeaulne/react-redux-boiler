import { createReducer } from 'redux-act'

import {
    updateUser
} from '../actions'

export default createReducer({
  [updateUser]: (state, payload) =>(payload[0])
}, {name: 'Owen', age: 2})
