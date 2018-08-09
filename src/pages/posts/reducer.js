import { addPosts } from './actions';
import { ADD_POSTS } from '../../actions/actionTypes';

const defaultState = [
  {
    title: 'Default Title',
    description: 'Default Description'
  }
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return [...state, action.post];
    default:
      return state;
  }
};
