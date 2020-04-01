import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    width: 100,
    marginRight: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const ButtonLink = ({label, path}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Link
        className={classes.link}
        to={{pathname: path}}
      >
        <Button
          className={classes.button}
          color={"secondary"}
          variant={"contained"}
        >
          {label}
        </Button>
      </Link>
    </Fragment>
  )

};

export default ButtonLink;
