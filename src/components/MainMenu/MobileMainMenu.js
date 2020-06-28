import React from "react";
import {withRouter} from "react-router-dom";
import MainMenuWrapper from "./wrapper";
import BaseMainMenu from "./BaseMainMenu";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.primary.light,
    float: "right",
    height: 150,
    padding: theme.spacing(1),
    width: "100%",
  }
}));

const MobileMainMenu = ({history, store}) => {
  const classes = useStyles();
  return (
    <BaseMainMenu
      history={history}
      store={store}
      classes={classes}
    />
  )
};

export default withRouter(MainMenuWrapper(MobileMainMenu));
