import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: 16,

    display: "flex",
    flexDirection: "row",

    color: theme.palette.primary.light,
    height: 32,
    textTransform: "none",
    '&:hover': {
      border: `1px solid ${theme.palette.primary.dark}`,
      backgroundColor: theme.palette.primary.dark,
    },
  },
  label: {
    margin: `0 ${theme.spacing(3)}px 0 ${theme.spacing(3)}px`,
    paddingTop: 8,
  },
  labelWithIcon: {
    margin: `0 ${theme.spacing(3)}px 0 ${theme.spacing(1)}px`,
    paddingTop: 8,
  },
  icon: {
    marginLeft: theme.spacing(1),
    paddingTop: 4,
  },
  iconWithoutLabel: {
    margin: "auto",
    paddingLeft: 4,
    width: 28,
    paddingTop: 3,
  },
  link: {
    position: "relative",
    textDecoration: "none",
  },
  invertedButton: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: 16,
    color: theme.palette.secondary.main,

    display: "flex",
    flexDirection: "row",

    height: 32,
    textTransform: "none",
    '&:hover': {
      border: `1px solid ${theme.palette.primary.dark}`,
      color: theme.palette.primary.dark,
    },
  },
}));

const ButtonLink = ({to, state={}, label=null, icon=null, inverted=false}) => {
  const classes = useStyles();
  return (
    <Link
      className={classes.link}
      to={{
        pathname: to,
        state: state,
      }}
    >
      <div className={inverted ? classes.invertedButton : classes.button}>
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
      </div>
    </Link>
  )
};

export default ButtonLink;
