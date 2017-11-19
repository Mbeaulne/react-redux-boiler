import {
    HELLO_WORLD
} from '../config/actionType'

const userReducer = (state = {name: 'Owen', age: 2}, action) => {
  switch (action.type) {
    case HELLO_WORLD: {
      return {...state, ...action.payload}
    }
    default:
      return state
  }
}

export default userReducer
