import { createReducer } from 'redux-act';

import { updateUser } from '../actions';

const defaultState = { name: 'Owen', age: 2 };

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return action.payload[0];
    default:
      return state;
  }
};
