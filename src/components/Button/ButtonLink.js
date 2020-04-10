import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const ButtonLink = ({label, path, withDefaultWidth=true}) => {
  const classes = useStyles();
  const extraButtonStyle = withDefaultWidth ? {width: 100} : {};
  return (
    <Link
      className={classes.link}
      to={{pathname: path}}
    >
      <Button
        className={classes.button}
        color={"secondary"}
        style={extraButtonStyle}
        variant={"contained"}
      >
        {label}
      </Button>
    </Link>
  )

};

export default ButtonLink;
