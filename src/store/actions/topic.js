import DispatchAPI from "../../api";
import { topicsURL } from "../../settings";

export const GET_TOPIC_BEGIN   = 'GET_TOPIC_BEGIN';
export const GET_TOPIC_SUCCESS = 'GET_TOPIC_SUCCESS';
export const GET_TOPIC_ERROR = 'GET_TOPIC_ERROR';
export const CLEAR_TOPIC = 'CLEAR_TOPIC';

export const getTopicBegin = () => ({
  type: GET_TOPIC_BEGIN,
});

export const getTopicSuccess = data => ({
  type: GET_TOPIC_SUCCESS,
  payload: { data }
});

export const getTopicError = error => ({
  type: GET_TOPIC_ERROR,
  payload: { error }
});

export const clearTopic = () => ({
  type: CLEAR_TOPIC,
});

export const getTopic = slug => new DispatchAPI().get(
  topicsURL,
  getTopicBegin,
  getTopicSuccess,
  getTopicError,
  slug,
);
