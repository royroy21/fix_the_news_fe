import BaseLike, {likeStyles} from "./BaseLike";
import {withStyles} from "@material-ui/core";
import LikeWrapper from "./wrapper";
import PropTypes from "prop-types";

class LikeTopicTopNewsItem extends BaseLike {

  handlePost = event => {
    event.preventDefault();
    const {likedObject, topicId} = this.props;
    this.props.actions.postLikeTopicTopNewsItem(
      {"news_item": likedObject.id},
      topicId,
    );
    this.setLoadingTimer()
  };

  handleDelete = event => {
    event.preventDefault();
    const {likedObject, topicId} = this.props;
    this.props.actions.deleteLikeTopicTopNewsItem(
      likedObject.like,
      topicId,
    );
    this.setLoadingTimer()
  };

}

export default withStyles(likeStyles)(LikeWrapper(LikeTopicTopNewsItem));

LikeTopicTopNewsItem.propTypes = {
  topicId: PropTypes.number.isRequired,
};
