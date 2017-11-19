import { createAction } from 'redux-act';
import { fakeLogin } from '../../fake-server/login';

export const addPosts = createAction('add posts to state');


export const login = () => dispatch => {
    console.log('hereee');
    fakeLogin('Sincere@april.biz').then(data => console.log('data',data))
    // return dispatch({
    //     type: HELLO_WORLD,
    //     payload: {sup: 'sup'}
    // });
};