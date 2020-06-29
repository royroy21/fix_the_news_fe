import React from "react";
import {withRouter} from "react-router-dom";
import MainMenuWrapper from "./wrapper";
import BaseMainMenu from "./BaseMainMenu";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.primary.light,
    float: "right",
    height: 250,
    marginTop: 20,
    padding: theme.spacing(1),
    width: "20%",
  }
}));

const DesktopMainMenu = ({history, store}) => {
  const isSmallScreen = store.appDimensions.isSmallScreen;
  const classes = useStyles();
  return (
    <BaseMainMenu
      history={history}
      store={store}
      classes={classes}
      style={!isSmallScreen ? {marginRight: "15%"} : {marginRight: 20}}
    />
  )
};

export default withRouter(MainMenuWrapper(DesktopMainMenu));
