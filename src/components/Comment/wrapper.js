import { connect } from 'react-redux'
import { getTopicComments } from '../../store/actions/topicComments'
import {
  clearComment,
  postTopicComment
} from '../../store/actions/comment'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
      comment: state.comment,
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
      clearComment: () => {
        dispatch(clearComment());
      },
    }
  }
};

const CommentWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default CommentWrapper;
