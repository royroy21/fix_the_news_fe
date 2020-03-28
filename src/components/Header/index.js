import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeaderWrapper from "./wrapper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  loginButtons: {
    width: 100,
    marginRight: theme.spacing(1),
  },
  registerButtons: {
    width: 100,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position={"static"}>
        <Toolbar>
          <Typography variant={"h6"} className={classes.title}>
            {"FixTheNews"}
          </Typography>
          {!!!props.store.user.object ? (
            <Fragment>
              <Button
                className={classes.loginButtons}
                variant={"contained"}
                color={"secondary"}
              >
                {"Login"}
              </Button>
              <Button
                className={classes.registerButtons}
                variant={"contained"}
                color={"secondary"}
              >
                {"Register"}
              </Button>
            </Fragment>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderWrapper(Header);
