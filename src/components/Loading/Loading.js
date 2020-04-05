import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    position: "relative",
  },
  loadingSpinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
  }
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress
        className={classes.loadingSpinner}
        color={"secondary"}
      />
    </div>
  )
};

export default Loading;
