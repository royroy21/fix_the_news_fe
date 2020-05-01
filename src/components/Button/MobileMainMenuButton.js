import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.primary.light,
    border: "none",
  },
  menu: {
    fontSize: 35,
    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
}));

const MobileMainMenuButton = ({onClick}) => {
  const classes = useStyles();
  return (
    <button className={classes.button} onClick={onClick}>
      <MenuIcon className={classes.menu}/>
    </button>
  )
};

export default MobileMainMenuButton;
