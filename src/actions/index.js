import { fakeLogin } from '../fake-server/login'
import { HELLO_WORLD } from '../config/actionType'

export const login = () => dispatch => {
  console.log('hereee')
  fakeLogin('Sincere@april.biz').then(data => console.log('data', data))
    // return dispatch({
    //     type: HELLO_WORLD,
    //     payload: {sup: 'sup'}
    // });
}
