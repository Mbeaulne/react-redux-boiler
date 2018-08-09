import { fakeLogin } from '../fake-server/login';
import { ADD_USER } from './actionTypes';

export const updateUser = payload => ({ type: ADD_USER, payload });

export const login = () => dispatch => {
  fakeLogin('Sincere@april.biz').then(data => dispatch(updateUser(data)));
};
