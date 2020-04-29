import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const defaultButtonStyle = (theme) => {
  return {
    borderRadius: 20,
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    fontFamily: theme.typography.fontFamily,
    height: 40,
    minWidth: 40,
    textTransform: "none",
  }
};

export const useStyles = makeStyles(theme => ({
  button: {
    ...defaultButtonStyle(theme),
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.primary.light,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.light}`,
      backgroundColor: theme.palette.secondary.light,
      boxShadow: "0 8px 6px -6px black",
    },
  },
  label: {
    margin: `0 ${theme.spacing(3)}px 0 ${theme.spacing(3)}px`,
    fontSize: 16,
  },
  labelWithIcon: {
    margin: `0 ${theme.spacing(3)}px 0 ${theme.spacing(1)}px`,
    paddingTop: 6,
    fontSize: 16,
  },
  icon: {
    marginLeft: theme.spacing(2),
    paddingTop: 2,
  },
  iconWithoutLabel: {
    paddingLeft: 1,
    paddingTop: 2,
  },
  invertedButton: {
    ...defaultButtonStyle(theme),
    border: `1px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.light}`,
      backgroundColor: theme.palette.secondary.light,
      boxShadow: "0 8px 6px -6px black",
      color: theme.palette.primary.light,
    },
  },
}));

const Button = ({icon=null, inverted=false, label=null, onClick=undefined, style={}}) => {
  const classes = useStyles();
  return (
    <button
      className={inverted ? classes.invertedButton : classes.button}
      onClick={onClick}
      style={style}
    >
      {icon ? (
        <div className={label ? classes.icon : classes.iconWithoutLabel}>
          {icon}
        </div>
      ) : null}
      {label ? (
        <div className={icon ? classes.labelWithIcon: classes.label}>
          {label}
        </div>
      ) : null}
    </button>
  )
};

export default Button;
