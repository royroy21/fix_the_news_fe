import {
  GET_CATEGORY_NEWS_ITEMS_BEGIN,
  GET_CATEGORY_NEWS_ITEMS_SUCCESS,
  GET_CATEGORY_NEWS_ITEMS_ERROR,
} from './../actions/categoryNewsItems';

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
          items: [
            ...getNewsItems(action, state).items,
            ...action.payload.data.results,
          ],
        },
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
