import { connect } from 'react-redux'
import { getTopicComments } from '../../store/actions/topicComments'
import {
  clearTopicComment,
  postTopicComment
} from '../../store/actions/topicComment'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
      topicComment: state.topicComment,
      topicComments: state.topicComments,
      user: state.user,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getTopicComments: params => {
        dispatch(getTopicComments(params))
      },
      postTopicComment: data => {
        dispatch(postTopicComment(data))
      },
      clearTopicComment: () => {
        dispatch(clearTopicComment());
      },
    }
  }
};

const CommentWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default CommentWrapper;
