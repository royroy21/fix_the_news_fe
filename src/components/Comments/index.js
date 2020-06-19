import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TopicCommentForm from "../Comment/TopicCommentForm";
import Avatar from "@material-ui/core/Avatar";
import Comment from '../Comment';
import {initialTopicCommentsState} from "../../store/reducers/topicComments";
import ListPaginationWithMoreButton from "../ListPaginationWithMoreButton";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: 'auto',
  },
  container: {
    padding: "10px 15px 10px 15px",
  },
}));

const Comments = ({actions, store, topicId, user}) => {
  const classes = useStyles();
  const userAvatar = (user.object || {}).avatar;
  const addBaseCommentStyle = {
    display: 'inline-grid',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  const { isMobile } = store.appDimensions;
  addBaseCommentStyle.gridTemplateColumns = isMobile
    ? '100%'
    : '5% 95%';
  return (
    <div className={classes.container}>
      <div style={addBaseCommentStyle}>
        {!isMobile ? (
          <Avatar
            className={classes.avatar}
            src={userAvatar ? userAvatar : null}
          />
        ) : null}
        <div style={{marginLeft: 8}}>
          <TopicCommentForm
            actions={actions}
            topicId={topicId}
            storeObject={store.comment}
            successMessage={"Comment successfully added"}
            user={user}
            withButton={false}
            withLoadingModal={false}
          />
        </div>
      </div>
      <ListPaginationWithMoreButton
        ItemComponent={Comment}
        request={actions.getTopicComments}
        requestParamName={'topic'}
        requestParamValue={topicId}
        store={store.topicComments[topicId] || initialTopicCommentsState}
      />
    </div>
  )
};

export default Comments;
