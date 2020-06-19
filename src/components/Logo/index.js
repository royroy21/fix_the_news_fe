import fixTheNewsLogo07 from '../../images/fixTheNewsLogo07.svg';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 1,
    display: "flex",
    flexDirection: "row",
  },
  image: {
    height: 32,
    width: 32,
  },
  textContainer: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: theme.spacing(0.5),
    marginTop: 2,
  },
  text: {
    color: theme.palette.secondary.light,
  },
}));

const Logo = ({style={}}) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={style}>
      <img className={classes.image} src={fixTheNewsLogo07} alt="??" />
      <div className={classes.textContainer}>
        <span className={classes.text}>{"fix"}</span>
        <span>{"thenews"}</span>
      </div>
    </div>
  )
};

export default Logo;
