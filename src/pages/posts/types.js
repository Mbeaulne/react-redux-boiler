export type Post = {
  +title: string,
  +description: string
};

//ACTIONS
export type addPostsAction = { type: 'ADD_POSTS', post: Post };
export type actions = addPostsAction;

//STATE
export type State = Array<Post>;
