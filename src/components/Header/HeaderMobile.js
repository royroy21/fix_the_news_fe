import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HeaderWrapper from "./wrapper";
import MobileMainMenuButton from "../Button/MobileMainMenuButton";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    margin: "auto",
    padding: 0,
    width: "100%",
  },
}));

const HeaderMobile = (props) => {
  const classes = useStyles();
  const openMenu = () => {};
  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position={"static"}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant={"h6"}>
            {"FixTheNews"}
          </Typography>
          <MobileMainMenuButton onClick={openMenu} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderWrapper(HeaderMobile);
