import { connect } from 'react-redux'
import {
  postLikeTopicTopNewsItem,
  deleteLikeTopicTopNewsItem,
} from "../../store/actions/like";

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      postLikeTopicTopNewsItem: (data, topicId) => {
        dispatch(postLikeTopicTopNewsItem(data, topicId))
      },
      deleteLikeTopicTopNewsItem: (id, topicId) => {
        dispatch(deleteLikeTopicTopNewsItem(id, topicId));
      },
    }
  }
};

const LikeWrapper = connect(
  null,
  mapDispatchToProps
);

export default LikeWrapper;
