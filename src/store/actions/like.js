import DispatchAPI from "../../api";
import {likesURL} from "../../settings";
import {refreshTopic} from "./topics";

export const POST_LIKE_BEGIN   = 'POST_LIKE_BEGIN';
export const POST_LIKE_SUCCESS = 'POST_LIKE_SUCCESS';
export const POST_LIKE_ERROR = 'POST_LIKE_ERROR';
export const DELETE_LIKE_BEGIN   = 'DELETE_LIKE_BEGIN';
export const DELETE_LIKE_SUCCESS = 'DELETE_LIKE_SUCCESS';
export const DELETE_LIKE_ERROR = 'DELETE_LIKE_ERROR';
export const CLEAR_LIKE = 'CLEAR_LIKE';

export const postLikeBegin = data => ({
  type: POST_LIKE_BEGIN,
  payload: { data },
});

export const postLikeSuccess = data => ({
  type: POST_LIKE_SUCCESS,
  payload: { data }
});

export const postLikeError = error => ({
  type: POST_LIKE_ERROR,
  payload: { error }
});

export const postLikeTopicTopNewsItem = (data, topicId) => new DispatchAPI().create(
  likesURL,
  postLikeBegin,
  postLikeSuccess,
  postLikeError,
  data,
  null,
  [() => refreshTopic(topicId)],
);

export const postLikeNewsItem = (data, newsItemId) => new DispatchAPI().create(
  likesURL,
  postLikeBegin,
  postLikeSuccess,
  postLikeError,
  data,
  null,
  [
  ],
);

export const deleteLikeBegin = data => ({
  type: DELETE_LIKE_BEGIN,
});

export const deleteLikeSuccess = data => ({
  type: DELETE_LIKE_SUCCESS,
});

export const deleteLikeError = error => ({
  type: DELETE_LIKE_ERROR,
  payload: { error }
});

export const deleteLikeTopicTopNewsItem = (id, topicId) => new DispatchAPI().delete(
  likesURL,
  deleteLikeBegin,
  deleteLikeSuccess,
  deleteLikeError,
  id,
  null,
  [() => refreshTopic(topicId)],
);

export const deleteLikeNewsItem = (id, newsItemId) => new DispatchAPI().delete(
  likesURL,
  deleteLikeBegin,
  deleteLikeSuccess,
  deleteLikeError,
  id,
  null,
  [
  ],
);

export const clearLike = (params) => ({
  type: CLEAR_LIKE,
  params,
});
