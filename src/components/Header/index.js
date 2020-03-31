import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeaderWrapper from "./wrapper";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  localStorageAuthTokenKey,
  loginRoute,
  registrationRoute
} from "../../settings";
import LoginModal from "../User/LoginModal";
import UserDisplay from "../User/UserDisplay";
import {Link, Route} from "react-router-dom";
import RegistrationModal from "../User/RegistrationModal";

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
  logoutButton: {
    marginLeft: theme.spacing(2),
  },
  linkWithNoDecoration: {
    textDecoration: "none",
    color: "white",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const { object:user } = props.store.user;

  const logout = () => {
    props.actions.clearUser();
    localStorage.removeItem(localStorageAuthTokenKey);
  };

  const getRoutes =() => {
    return (
      <Fragment>
        <Route
          exact
          path={loginRoute}
          component={LoginModal}
        />
        <Route
          exact
          path={registrationRoute}
          component={RegistrationModal}
        />
      </Fragment>
    )
  };

  return (
    <div className={classes.root}>
      {getRoutes()}
      <AppBar position={"static"}>
        <Toolbar>
          <Typography variant={"h6"} className={classes.title}>
            {"FixTheNews"}
          </Typography>
          {!!!user ? (
            <Fragment>
              <Button
                className={classes.loginButtons}
                color={"secondary"}
                variant={"contained"}
              >
                <Link
                  className={classes.linkWithNoDecoration}
                  to={{
                    pathname: loginRoute,
                    state: {
                      open: true,
                    }
                  }}
                >
                  {"login"}
                </Link>
              </Button>
              <Button
                className={classes.loginButtons}
                color={"secondary"}
                variant={"contained"}
              >
                <Link
                  className={classes.linkWithNoDecoration}
                  to={{
                    pathname: registrationRoute,
                    state: {
                      open: true,
                    }
                  }}
                >
                  {"Sign up"}
                </Link>
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <UserDisplay userObject={user} />
              <Button
                className={classes.logoutButton}
                color={"secondary"}
                onClick={logout}
                variant={"contained"}
              >
                <ExitToAppIcon />
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderWrapper(Header);
