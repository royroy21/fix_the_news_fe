import DispatchAPI from "../../api";
import {newsItemsURL} from "../../settings";

export const GET_CATEGORY_NEWS_ITEMS_BEGIN   = 'GET_CATEGORY_NEWS_ITEMS_BEGIN';
export const GET_CATEGORY_NEWS_ITEMS_SUCCESS = 'GET_CATEGORY_NEWS_ITEMS_SUCCESS';
export const GET_CATEGORY_NEWS_ITEMS_ERROR = 'GET_CATEGORY_NEWS_ITEMS_ERROR';
export const CLEAR_CATEGORY_NEWS_ITEMS = 'CLEAR_CATEGORY_NEWS_ITEMS';

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

export const getCategoryNewsItemsError = (error, params) => ({
  type: GET_CATEGORY_NEWS_ITEMS_ERROR,
  params,
  payload: { error },
});

export const clearCategoryNewsItems = (params) => ({
  type: CLEAR_CATEGORY_NEWS_ITEMS,
  params,
});

export const getCategoryNewsItems = (params={}) => new DispatchAPI().get(
  newsItemsURL,
  getCategoryNewsItemsBegin,
  getCategoryNewsItemsSuccess,
  getCategoryNewsItemsError,
  null,
  params,
);