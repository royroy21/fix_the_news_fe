import { connect } from 'react-redux'
import {
  postLikeNewsItem,
  postLikeTopicTopNewsItem,
  deleteLikeNewsItem,
  deleteLikeTopicTopNewsItem,
} from "../../store/actions/like";

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      postLikeNewsItem: (data, newsItemId, topicId) => {
        dispatch(postLikeNewsItem(data, newsItemId, topicId))
      },
      postLikeTopicTopNewsItem: (data, topicId) => {
        dispatch(postLikeTopicTopNewsItem(data, topicId))
      },
      deleteLikeNewsItem: (id, newsItemId, topicId) => {
        dispatch(deleteLikeNewsItem(id, newsItemId, topicId))
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
