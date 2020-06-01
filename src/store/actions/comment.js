import DispatchAPI from "../../api";
import {commentsURL} from "../../settings";
import { getTopicComments } from "./topicComments";
import { getCommentComments } from "./commentComments";
import {refreshTopic} from "./topics";

export const POST_COMMENT_BEGIN   = 'POST_COMMENT_BEGIN';
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';
export const CLEAR_COMMENT = 'CLEAR_COMMENT';

export const postCommentBegin = data => ({
  type: POST_COMMENT_BEGIN,
  payload: { data },
});

export const postCommentSuccess = data => ({
  type: POST_COMMENT_SUCCESS,
  payload: { data }
});

export const postCommentError = error => ({
  type: POST_COMMENT_ERROR,
  payload: { error }
});

export const clearComment = (params) => ({
  type: CLEAR_COMMENT,
  params,
});

export const postCommentComment = (data) => new DispatchAPI().create(
  commentsURL,
  postCommentBegin,
  postCommentSuccess,
  postCommentError,
  data,
  null,
  [
    () => getCommentComments({
      comment: data.get("comment"),
    }),
  ]
);

export const postTopicComment = (data) => new DispatchAPI().create(
  commentsURL,
  postCommentBegin,
  postCommentSuccess,
  postCommentError,
  data,
  null,
  [
    () => refreshTopic(data.get("topic")),
    () => getTopicComments({
      topic: data.get("topic"),
    }),
  ]
);
