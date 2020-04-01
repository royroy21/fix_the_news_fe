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
import UserDisplay from "../User/UserDisplay";
import ButtonLink from "../Button/ButtonLink";

const useStyles = makeStyles(theme => ({
  logoutButton: {
    marginLeft: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { object:user } = props.store.user;

  const logout = () => {
    props.actions.clearUser();
    localStorage.removeItem(localStorageAuthTokenKey);
  };

  return (
    <div className={classes.root}>
      <AppBar position={"static"}>
        <Toolbar>
          <Typography variant={"h6"} className={classes.title}>
            {"FixTheNews"}
          </Typography>
          {!!!user ? (
            <Fragment>
              <ButtonLink
                label={"login"}
                path={loginRoute}
              />
              <ButtonLink
                label={"Sign up"}
                path={registrationRoute}
              />
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
