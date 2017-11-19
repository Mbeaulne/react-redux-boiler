import { fakeLogin } from '../../fake-server/login'
import { createAction } from 'redux-act'

export const addUser = createAction('ADD_USER')
export const signOut = createAction('SIGN_OUT')

export const login = email => dispatch => {
  fakeLogin(email)
  .then(data =>  {
    if(!data) throw 'no user'
    dispatch(addUser(data))
  })
  .catch(() => dispatch(signOut()))
}