import {registrationRoute} from "../../settings";
import {Link} from "react-router-dom";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "grey",
    "&:hover": {
      color: "blue",
    }
  },
}));

const RegisterUserLink = () => {
  const classes = useStyles();
  return (
    <Link
      className={classes.link}
      to={{pathname: registrationRoute}}
    >
      {"register new user"}
    </Link>
  )
};

export default RegisterUserLink;
