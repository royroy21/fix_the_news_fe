import React, {useState} from "react";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";
import Comments from "../Comments";
import TopicCommentsWrapper from "./wrapper";

const useStyles = makeStyles((theme) => ({
  container: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    marginTop: 5,
    marginRight: theme.spacing(1),
  },
  content: {
    color: 'grey',
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    margin: '5px auto 5px auto',
    width: 160,
    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
  messageIcon: {
    marginTop: 15,
    marginRight: 5,
  },
  ExpandIcon: {
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
  },
}));

const CommentsButton = ({actions, commentsCount, store, topicId}) => {
  const [isExpanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        className={classes.content}
        onClick={() => setExpanded(!isExpanded)}
      >
        <ChatBubbleOutlineIcon
          className={classes.messageIcon}
          fontSize={'small'}
        />
        <p className={classes.text}>{`${commentsCount || ""} Comments`}</p>
        {isExpanded ? (
          <ExpandLessIcon className={classes.ExpandIcon} />
        ) : (
          <ExpandMoreIcon className={classes.ExpandIcon} />
        )}
      </div>
      {isExpanded ? (
        <Comments
          actions={actions}
          store={store}
          topicId={topicId}
          user={store.user}
        />
      ) : null}
    </div>
  )
};

export default TopicCommentsWrapper(CommentsButton);
