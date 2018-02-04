import * as Api from '../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const getPosts = () =>  async (dispatch) => dispatch(
  receivePosts(await Api.getPosts())
);
