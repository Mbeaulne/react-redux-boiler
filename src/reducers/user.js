// @flow
import { createReducer } from 'redux-act';

import { updateUser } from '../actions';

type State = {
  +name: string,
  +age: number
};

const defaultState: State = { name: 'Owen', age: 2 };

export default createReducer(
  {
    [updateUser]: (state, payload) => payload[0]
  },
  defaultState
);
