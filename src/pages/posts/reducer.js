import { addPosts } from './actions';

const defaultState = [
  {
    title: 'Default Title',
    description: 'Default Description'
  }
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POSTS':
      return [...state, action.post];
    default:
      return state;
  }
};
