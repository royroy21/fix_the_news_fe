import DispatchAPI from "../../api";
import {topicsURL} from "../../settings";

export const GET_TOPICS_BEGIN   = 'GET_TOPICS_BEGIN';
export const GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS';
export const GET_TOPICS_ERROR = 'GET_TOPICS_ERROR';
export const CLEAR_TOPICS = 'CLEAR_TOPICS';

export const getTopicsBegin = data => ({
  type: GET_TOPICS_BEGIN,
  payload: { data },
});

export const getTopicsSuccess = data => ({
  type: GET_TOPICS_SUCCESS,
  payload: { data },
});

export const getTopicsError = data => ({
  type: GET_TOPICS_ERROR,
  payload: { data },
});

export const getTopics = (url=topicsURL, params={}) => new DispatchAPI().get(
  url,
  getTopicsBegin,
  getTopicsSuccess,
  getTopicsError,
  null,
  params,
);
