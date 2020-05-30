import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CommentForm from "../Comment/CommentForm";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  addBaseComment: {
    display: 'inline-grid',
    gridTemplateColumns: '10% 90%',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  avatar: {
    margin: 'auto',
  },
  container: {
    padding: theme.spacing(1),
    maxHeight: 300,
  },
}));

const Comments = ({actions, store, topicId, user}) => {
  useEffect(
    () => {actions.getTopicComments({topic: topicId})},
    [actions, topicId],
  );
  const classes = useStyles();
  const userAvatar = (user.object || {}).avatar;
  return (
    <div className={classes.container}>
      <div className={classes.addBaseComment}>
        <Avatar
          className={classes.avatar}
          src={userAvatar ? userAvatar : null}
        />
        <CommentForm
          actions={actions}
          topicId={topicId}
          storeObject={store.topicComment}
          successMessage={"Comment successfully added"}
          withButton={false}
        />
      </div>
    </div>
  )
};

export default Comments;
