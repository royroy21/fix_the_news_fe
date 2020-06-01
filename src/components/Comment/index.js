import React, {Fragment, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import CommentWrapper from "./wrapper";
import CommentCommentForm from "./CommentCommentForm";
import reply from '../../images/reply.svg';
import NestedComments from "../Comments/NestedComments";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: `${theme.spacing(2)}px auto auto auto`,
  },
  hide: {
    color: theme.palette.primary.dark,
    fontSize: '0.8em',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.light,
    }
  },
  textContainer: {
    backgroundColor: '#E8ECEF',
    borderRadius: '4px 25px 25px 25px',
    padding: theme.spacing(1),
    margin: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
  },
  name: {
    color: theme.palette.primary.dark,
    padding: 2,
  },
  replyContainer: {
    color: theme.palette.primary.dark,
    fontSize: '0.8em',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.light,
    }
  },
  repliesContainer: {
    color: theme.palette.secondary.main,
    fontSize: '0.8em',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.light,
    }
  },
  sectionText: {
    paddingLeft: theme.spacing(1),
  },
  text: {
    padding: 2,
  },
}));

const Comment = ({actions, item, store}) => {
  const [showComments, setShowComments] = useState(false);
  const classes = useStyles();
  const {avatar, first_name, last_name} = item.serialized_user;
  const userAvatar = (store.user.object || {}).avatar;
  const commentStyle = {
    display: 'inline-grid',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  const largeColumnWidth = store.appDimensions.isMobile ? 80 : 90;
  const smallColumnWidth = store.appDimensions.isMobile ? 20 : 10;
  commentStyle.gridTemplateColumns = `${smallColumnWidth}% ${largeColumnWidth}%`;
  return (
    <div>
      <div style={commentStyle}>
        <Avatar className={classes.avatar} src={avatar} />
        <div className={classes.textContainer}>
          <span className={classes.name}>{`${first_name} ${last_name}`}</span>
          <p className={classes.text}>{item.text}</p>
        </div>
      </div>
      {showComments ? (
        <Fragment>
          <span
            className={classes.repliesContainer}
            onClick={() => setShowComments(false)}
            style={{
              marginLeft: `${smallColumnWidth}%`,
            }}
          >
            <ExpandLessIcon />
          </span>
          <div style={{
            ...commentStyle,
            width: `${largeColumnWidth}%`,
            marginLeft: `${smallColumnWidth}%`,
          }}>
            <Avatar
              className={classes.avatar}
              src={userAvatar ? userAvatar : null}
            />
            <div style={{width: '98%'}}>
              <CommentCommentForm
                actions={actions}
                commentId={item.id}
                storeObject={store.comment}
                successMessage={"Comment successfully added"}
                user={store.user}
                withButton={false}
                withLoadingModal={false}
              />
            </div>
          </div>
          <div style={{marginLeft: `${smallColumnWidth}%`}}>
            <NestedComments
              actions={actions}
              item={item}
              store={store}
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div
            className={classes.replyContainer}
            style={{marginLeft: `${smallColumnWidth}%`}}
          >
            <img src={reply} alt="??" />
            <span
              className={classes.sectionText}
              onClick={() => setShowComments(true)}
            >
              {'reply'}
            </span>
          </div>
          {item.comments_count ? (
          <div
            className={classes.repliesContainer}
            style={{marginLeft: `${smallColumnWidth}%`}}
          >
            <img style={{transform: 'scale(-1,-1)'}} src={reply} alt="??" />
            <span
              className={classes.sectionText}
              onClick={() => setShowComments(true)}
            >
              {`${item.comments_count} ${item.comments_count === 1 ? 'reply': 'replies'}`}
            </span>
          </div>
        ) : null}
        </Fragment>
      )}
    </div>
  )
};

export default CommentWrapper(Comment);
