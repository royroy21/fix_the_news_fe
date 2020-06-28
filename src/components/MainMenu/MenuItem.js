import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  link: {
    color: "black",
    marginTop: 5,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const MenuItem = ({icon, label, to}) => {
  const classes = useStyles();

  if (!to) {
    return null;
  }

  return (
    <div className={classes.container}>
      {icon}
      <Link className={classes.link} to={to}>{label}</Link>
    </div>
  )
};

export default MenuItem;
