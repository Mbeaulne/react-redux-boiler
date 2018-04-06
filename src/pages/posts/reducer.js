// @flow

import { Post, actions, State } from './types';

import { addPosts } from './actions';

const defaultState: State = [
  {
    title: 'Default Title',
    description: 'Default Description'
  }
];

export default (state: State = defaultState, action: actions): State => {
  switch (action.type) {
    case 'ADD_POSTS':
      return [...state, action.post];
    default:
      return state;
  }
};
