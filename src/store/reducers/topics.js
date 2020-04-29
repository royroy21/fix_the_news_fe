import {
  GET_TOPICS_BEGIN,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR,
  CLEAR_TOPICS,
} from './../actions/topics';
import {combineLists} from "../../helpers/arrayFunctions";

const initialState = {
  objects: null,
  loading: false,
  error: null,
  items: [],
};

const topicsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TOPICS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TOPICS_SUCCESS:
      return {
        objects: action.payload.data,
        loading: false,
        error: null,
        items: combineLists(
          state.items,
          action.payload.data.results,
        ),
      };
    case GET_TOPICS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case CLEAR_TOPICS:
      return {
        objects: null,
        loading: false,
        error: null,
        items: [],
      };
    default:
      return state
  }
};

export default topicsReducer;
