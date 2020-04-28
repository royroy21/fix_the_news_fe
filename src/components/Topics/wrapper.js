import { connect } from 'react-redux'
import {getNextTopics} from '../../store/actions/topics'

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
      getNextTopics: (url, params) => {
        dispatch(getNextTopics(url, params))
      },
    }
  }
};

const TopicsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default TopicsWrapper;
