import DispatchAPI from "../../api";
import {topicsURL} from "../../settings";

export const GET_NEXT_TOPICS_BEGIN   = 'GET_NEXT_TOPICS_BEGIN';
export const GET_NEXT_TOPICS_SUCCESS = 'GET_NEXT_TOPICS_SUCCESS';
export const GET_NEXT_TOPICS_ERROR = 'GET_NEXT_TOPICS_ERROR';
export const CLEAR_TOPICS = 'CLEAR_TOPICS';

export const getNextTopicsBegin = data => ({
  type: GET_NEXT_TOPICS_BEGIN,
  payload: { data },
});

export const getNextTopicsSuccess = data => ({
  type: GET_NEXT_TOPICS_SUCCESS,
  payload: { data },
});

export const getNextTopicsError = data => ({
  type: GET_NEXT_TOPICS_ERROR,
  payload: { data },
});

export const clearTopics = () => ({
  type: CLEAR_TOPICS,
});

export const getNextTopics = (url=topicsURL) => new DispatchAPI().get(
  url,
  getNextTopicsBegin,
  getNextTopicsSuccess,
  getNextTopicsError,
);
