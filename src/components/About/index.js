import React, {Fragment, useEffect} from "react";
import AboutWrapper from "./wrapper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
}));

const About = ({actions, store}) => {
  const classes = useStyles();
  const {
    id,
    text,
    title,
  } = store.aboutCommunication.object || {};
  useEffect(
    () => actions.getAboutCommunication(),
    [actions, id],
    )
  return (
    <Fragment>
      <h3 className={classes.title}>{title}</h3><br />
      <p className={classes.text}>{text}</p>
    </Fragment>
  )
}

export default AboutWrapper(About);
