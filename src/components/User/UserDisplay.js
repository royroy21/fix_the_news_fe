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

const UserDisplay = ({userObject, withName=false}) => {
  const {
    avatar,
    avatar_thumbnail_small,
    first_name: firstName,
    last_name: lastName,
  } = userObject;
  const visible_avatar = avatar_thumbnail_small || avatar;
  const classes = useStyles();
  return (
    <Fragment>
      {withName ? (
        <p className={classes.username}>{`${firstName} ${lastName}`}</p>
      ) : null}
      <Avatar
        className={classes.avatar}
        src={visible_avatar ? visible_avatar : null}
      />
    </Fragment>
  )

};

export default UserDisplay;
