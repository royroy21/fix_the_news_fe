import BaseLike, {likeStyles} from "./BaseLike";
import {withStyles} from "@material-ui/core";
import LikeWrapper from "./wrapper";
import PropTypes from "prop-types";

class LikeNewsItem extends BaseLike {

  handlePost = event => {
    event.preventDefault();
    const {likedObject, topicId} = this.props;
    this.props.actions.postLikeNewsItem(
      {"news_item": likedObject.id},
      likedObject.id,
      topicId,
    );
    this.setLoadingTimer()
  };

  handleDelete = event => {
    event.preventDefault();
    const {likedObject, topicId} = this.props;
    this.props.actions.deleteLikeNewsItem(
      likedObject.like,
      likedObject.id,
      topicId,
    );
    this.setLoadingTimer()
  };

}

export default withStyles(likeStyles)(LikeWrapper(LikeNewsItem));

LikeNewsItem.propTypes = {
  topicId: PropTypes.number.isRequired,
};
