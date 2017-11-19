import { createAction } from 'redux-act';
import { fakeLogin } from '../../fake-server/login';

export const addPosts = createAction('ADD_POSTS');


export const login = () => dispatch => {
    console.log('hereee');
    fakeLogin('Sincere@april.biz').then(data => console.log('data',data))
    // return dispatch({
    //     type: HELLO_WORLD,
    //     payload: {sup: 'sup'}
    // });
};