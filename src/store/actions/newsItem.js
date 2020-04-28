import DispatchAPI from "../../api";
import {newsItemsURL} from "../../settings";

export const POST_NEWS_ITEM_BEGIN   = 'POST_NEWS_ITEM_BEGIN';
export const POST_NEWS_ITEM_SUCCESS = 'POST_NEWS_ITEM_SUCCESS';
export const POST_NEWS_ITEM_ERROR = 'POST_NEWS_ITEM_ERROR';
export const CLEAR_NEWS_ITEM = 'CLEAR_NEWS_ITEM';

export const postNewsItemBegin = data => ({
  type: POST_NEWS_ITEM_BEGIN,
  payload: { data },
});

export const postNewsItemSuccess = data => ({
  type: POST_NEWS_ITEM_SUCCESS,
  payload: { data }
});

export const postNewsItemError = error => ({
  type: POST_NEWS_ITEM_ERROR,
  payload: { error }
});

export const clearNewsItem = () => ({
  type: CLEAR_NEWS_ITEM,
});

export const postNewsItem = (data) => new DispatchAPI().create(
  newsItemsURL,
  postNewsItemBegin,
  postNewsItemSuccess,
  postNewsItemError,
  data,
  null,
);
