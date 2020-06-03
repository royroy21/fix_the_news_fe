import React, {useState} from "react";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";
import Comments from "./index";
import CommentsWrapper from "./wrapper";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    marginTop: 5,
  },
  content: {
    color: 'grey',
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    margin: '5px auto 5px auto',
    width: 135,
    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
  messageIcon: {
    marginTop: 5,
    marginRight: 5,
  },
  ExpandIcon: {
  },
  text: {
    fontWeight: 'bold',
    marginTop: 5,
  },
}));

const CommentsButton = ({actions, commentsCount, store, topicId}) => {
  const [isExpanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <div
      className={classes.container}
      style={store.appDimensions.isMobile ? {marginLeft: 5, marginRight: 5} : undefined}
    >
      <div
        className={classes.content}
        onClick={() => setExpanded(!isExpanded)}
      >
        <ChatBubbleOutlineIcon
          className={classes.messageIcon}
          fontSize={'small'}
        />
        <span className={classes.text}>
          {'Comments'}
        </span>
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

export default CommentsWrapper(CommentsButton);
