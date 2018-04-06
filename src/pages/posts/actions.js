// @flow
import { Post, addPostsAction } from './types';

export const addPosts = (post: Post): addPostsAction => ({ type: 'ADD_POSTS', post });
