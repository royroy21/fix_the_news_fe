import {
  GET_TOPICS_BEGIN,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR,
  CLEAR_TOPICS,
} from './../actions/topics';

const initialState = {
  objects: null,
  loading: false,
  error: null,
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
      };
    case GET_TOPICS_ERROR:
      return {
        objects: null,
        loading: false,
        error: action.payload.error,
      };
    case CLEAR_TOPICS:
      return {
        objects: null,
        loading: false,
        error: null,
      };
    default:
      return state
  }
};

export default topicsReducer;
