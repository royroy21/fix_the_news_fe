import DispatchAPI from "../../api";
import {newsItemsURL} from "../../settings";

export const GET_CATEGORY_NEWS_ITEMS_BEGIN   = 'GET_CATEGORY_NEWS_ITEMS_BEGIN';
export const GET_CATEGORY_NEWS_ITEMS_SUCCESS = 'GET_CATEGORY_NEWS_ITEMS_SUCCESS';
export const GET_CATEGORY_NEWS_ITEMS_ERROR = 'GET_CATEGORY_NEWS_ITEMS_ERROR';

export const getCategoryNewsItemsBegin = (data, params) => ({
  type: GET_CATEGORY_NEWS_ITEMS_BEGIN,
  params,
  payload: { data },
});

export const getCategoryNewsItemsSuccess = (data, params) => ({
  type: GET_CATEGORY_NEWS_ITEMS_SUCCESS,
  params,
  payload: { data },
});

export const getCategoryNewsItemsError = (data, params) => ({
  type: GET_CATEGORY_NEWS_ITEMS_ERROR,
  params,
  payload: { data },
});

export const getCategoryNewsItems = (url=null, params={}) => new DispatchAPI().get(
  url || newsItemsURL,
  getCategoryNewsItemsBegin,
  getCategoryNewsItemsSuccess,
  getCategoryNewsItemsError,
  null,
  params,
);
