import { connect } from 'react-redux'
import {getTopics} from '../../store/actions/topics'

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
      getTopics: (url, params) => {
        dispatch(getTopics(url, params))
      },
    }
  }
};

const TopicsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default TopicsWrapper;
