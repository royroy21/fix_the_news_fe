import { connect } from 'react-redux'

import { CLEAR_TOPICS, getTopics } from '../../store/actions/topics'

const mapStateToProps = (state) => {
  return {
    store: {
      topics: state.topics,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getTopics: (params) => {
        dispatch(getTopics(params))
      },
      clearTopics: () => {
        dispatch({type: CLEAR_TOPICS});
      },
    }
  }
};

const TopicsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default TopicsWrapper;
