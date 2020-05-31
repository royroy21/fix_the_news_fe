import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import CommentWrapper from "./wrapper";


const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: `${theme.spacing(2)}px auto auto auto`,
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
  text: {
    padding: 2,
  },
}));

const Comment = ({item, store}) => {
  const classes = useStyles();
  const {avatar, first_name, last_name} = item.serialized_user;
  const containerStyle = {
    display: 'inline-grid',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  containerStyle.gridTemplateColumns = store.appDimensions.isMobile
    ? '20% 80%'
    : '10% 90%';
  return (
    <div style={containerStyle}>
      <Avatar className={classes.avatar} src={avatar} />
      <div className={classes.textContainer}>
        <span className={classes.name}>{`${first_name} ${last_name}`}</span>
        <p className={classes.text}>{item.text}</p>
      </div>
    </div>
  )
};

export default CommentWrapper(Comment);
