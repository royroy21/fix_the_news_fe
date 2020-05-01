import React from "react";
import {Link} from "react-router-dom";
import Button from "./index";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    position: "relative",
    textDecoration: "none",
  },
}));

const ButtonLink = ({icon=null, inverted=false, label=null, style={}, state={}, to}) => {
  const classes = useStyles();
  return (
    <Link
      className={classes.link}
      to={{
        pathname: to,
        state: state,
      }}
    >
      <Button
        icon={icon}
        inverted={inverted}
        label={label}
        style={style}
      />
    </Link>
  )
};

export default ButtonLink;
