import {
  GET_CATEGORY_NEWS_ITEMS_BEGIN,
  GET_CATEGORY_NEWS_ITEMS_SUCCESS,
  GET_CATEGORY_NEWS_ITEMS_ERROR,
  REFRESH_CATEGORY_NEWS_ITEM_BEGIN,
  REFRESH_CATEGORY_NEWS_ITEM_SUCCESS,
  REFRESH_CATEGORY_NEWS_ITEM_ERROR,
  CLEAR_CATEGORY_NEWS_ITEMS,
} from './../actions/categoryNewsItems';
import {combineLists, refreshItemNestList} from "../../helpers/arrayFunctions";

export const initialCategoryNewsItemState = {
  objects: null,
  loading: false,
  error: null,
  items: [],
};

const categoryNewsItemsReducer = (state = {}, action) => {
  const getNewsItems = (action, state) => {
    return state[action.params.category] || initialCategoryNewsItemState;
  };
  switch(action.type) {
    case GET_CATEGORY_NEWS_ITEMS_BEGIN:
      return {
        ...state,
        [action.params.category]: {
          ...getNewsItems(action, state),
          loading: true,
          error: null,
        },
      };
    case GET_CATEGORY_NEWS_ITEMS_SUCCESS:
      return {
        ...state,
        [action.params.category]: {
          objects: action.payload.data,
          loading: false,
          error: null,
          items: combineLists(
            getNewsItems(action, state).items,
            action.payload.data.results,
          ),
        },
      };
    case REFRESH_CATEGORY_NEWS_ITEM_BEGIN:
      return state;
    case REFRESH_CATEGORY_NEWS_ITEM_SUCCESS:
      return refreshItemNestList(state, action.payload.data);
    case REFRESH_CATEGORY_NEWS_ITEM_ERROR:
      return state;
    case CLEAR_CATEGORY_NEWS_ITEMS:
      return {
        ...state,
        [action.params.category]: initialCategoryNewsItemState,
      };
    case GET_CATEGORY_NEWS_ITEMS_ERROR:
      return {
        ...state,
        [action.params.category]: {
          ...getNewsItems(action, state),
          loading: false,
          error: action.payload.error,
        },
      };
    default:
      return state
  }
};

export default categoryNewsItemsReducer;
