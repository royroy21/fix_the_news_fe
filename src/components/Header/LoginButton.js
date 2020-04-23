import {Link} from "react-router-dom";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.secondary.main,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}));

const LoginButton = ({to}) => {
  const classes = useStyles();
  return (
    <Link
      className={classes.link}
      to={to}
    >{"Log In"}</Link>
  )
};

export default LoginButton;
