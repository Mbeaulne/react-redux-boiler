import { fakeLogin } from '../fake-server/login';
import { createAction } from 'redux-act';

export const updateUser = payload => ({ type: 'ADD_USER', payload });

export const login = () => dispatch => {
  fakeLogin('Sincere@april.biz').then(data => dispatch(updateUser(data)));
};
