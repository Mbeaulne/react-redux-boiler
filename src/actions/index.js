import { fakeLogin } from '../fake-server/login'
import { createAction } from 'redux-act'

export const updateUser = createAction('ADD_USER')

export const login = () => dispatch => {
  fakeLogin('Sincere@april.biz')
  .then(data =>  dispatch(updateUser(data)))
}