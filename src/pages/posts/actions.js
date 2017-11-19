import { createAction } from 'redux-act'
import { fakeLogin } from '../../fake-server/login'

export const addPosts = createAction('ADD_POSTS')