import { updateUser } from '../actions';
import { ADD_USER } from '../actions/actionTypes';

const defaultState = { name: 'Owen', age: 2 };

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload[0];
    default:
      return state;
  }
};
