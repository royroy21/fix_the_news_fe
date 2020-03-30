import React, {Fragment} from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  username: {
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
      <Avatar src={avatar ? avatar : null} />
    </Fragment>
  )

};

export default UserDisplay;
