import { normalize } from 'normalizr';
import { post as postSchema } from '../store/schema';
import { ENTITIES_ADD, POSTS_PREPEND, POSTS_APPEND } from './actionTypes';

const addEntities = entities => ({
  type: ENTITIES_ADD,
  payload: entities
});

const prependPostsAction = posts => ({
  type: POSTS_PREPEND,
  payload: posts
});

const appendPostsAction = posts => ({
  type: POSTS_APPEND,
  payload: posts
});

const prependPosts = posts => {
  return (dispatch, getState) => {
    dispatch(addEntities(normalize(posts, [postSchema]).entities));
    dispatch(prependPostsAction(posts));
  };
};

const appendPosts = posts => {
  return (dispatch, getState) => {
    dispatch(addEntities(normalize(posts, [postSchema]).entities));
    dispatch(appendPostsAction(posts));
  };
};

export { addEntities, prependPosts, appendPosts };
