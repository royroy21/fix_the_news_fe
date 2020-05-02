import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

export const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.secondary.light,
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: 20,
    color: theme.palette.primary.light,
    cursor: "pointer",
    height: 40,
    width: 40,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: theme.palette.secondary.main,
      boxShadow: "0 8px 6px -6px black",
    },
  },
  icon: {
    paddingTop: 3,
  },
}));

const CloseButton = ({onClick, style={}}) => {
  const classes = useStyles();
  return (
    <button
      className={classes.button}
      onClick={onClick}
      style={style}
    >
      <div className={classes.icon}>
        <CloseIcon />
      </div>
    </button>
  )
};

export default CloseButton;
