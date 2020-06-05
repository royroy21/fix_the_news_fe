import React, {Fragment} from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 36,
    width: 36,
  },
  username: {
    color: theme.palette.primary.dark,
    marginRight: theme.spacing(1),
  },
}));

const UserDisplay = ({userObject}) => {

  const {
    avatar,
    first_name: firstName,
    last_name: lastName,
  } = userObject;

  const classes = useStyles();

  return (
    <Fragment>
      <p className={classes.username}>{`${firstName} ${lastName}`}</p>
      <Avatar className={classes.avatar} src={avatar ? avatar : null} />
    </Fragment>
  )

};

export default UserDisplay;
