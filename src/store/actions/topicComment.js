import DispatchAPI from "../../api";
import {commentsURL} from "../../settings";
import {getTopicComments} from "./topicComments";

export const POST_TOPIC_COMMENT_BEGIN   = 'POST_TOPIC_COMMENT_BEGIN';
export const POST_TOPIC_COMMENT_SUCCESS = 'POST_TOPIC_COMMENT_SUCCESS';
export const POST_TOPIC_COMMENT_ERROR = 'POST_TOPIC_COMMENT_ERROR';
export const CLEAR_TOPIC_COMMENT = 'CLEAR_TOPIC_COMMENT';

export const postTopicCommentBegin = data => ({
  type: POST_TOPIC_COMMENT_BEGIN,
  payload: { data },
});

export const postTopicCommentSuccess = data => ({
  type: POST_TOPIC_COMMENT_SUCCESS,
  payload: { data }
});

export const postTopicCommentError = error => ({
  type: POST_TOPIC_COMMENT_ERROR,
  payload: { error }
});

export const clearTopicComment = (params) => ({
  type: CLEAR_TOPIC_COMMENT,
  params,
});

export const postTopicComment = (data) => new DispatchAPI().create(
  commentsURL,
  postTopicCommentBegin,
  postTopicCommentSuccess,
  postTopicCommentError,
  data,
  null,
  [
    () => getTopicComments({
      topic: data.get("topic"),
    }),
  ]
);
