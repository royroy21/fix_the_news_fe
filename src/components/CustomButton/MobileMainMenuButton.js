import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

export const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.primary.light,
    border: "none",
  },
  link: {
    color: theme.palette.secondary.dark,
    textDecoration: "none",
  },
  menu: {
    fontSize: 35,
    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
}));

const MobileMainMenuButton = ({to}) => {
  const classes = useStyles();
  return (
    <button className={classes.button}>
      <Link
        className={classes.link}
        to={to}
      >
        <MenuIcon className={classes.menu}/>
      </Link>
    </button>
  )
};

export default MobileMainMenuButton;
