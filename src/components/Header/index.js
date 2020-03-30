import React, {Fragment, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeaderWrapper from "./wrapper";
import RegistrationModal from "../User/RegistrationModal";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {localStorageAuthTokenKey} from "../../settings";

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
}));

const Header = (props) => {

  const [
    openRegistrationModel,
    setRegistrationModel,
  ] = useState(false);

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
              <Button
                className={classes.loginButtons}
                color={"secondary"}
                variant={"contained"}
              >
                {"Login"}
              </Button>
              <Button
                className={classes.registerButtons}
                color={"secondary"}
                onClick={() => setRegistrationModel(true)}
                variant={"contained"}
              >
                {"Register"}
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <p>{`${user.first_name}, ${user.first_name}`}</p>
              <Button
                className={classes.logoutButton}
                color={"secondary"}
                onClick={logout}
                variant={"contained"}
                startIcon={<ExitToAppIcon />}
              >
                {"logout"}
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      <RegistrationModal
        open={openRegistrationModel}
        closeModal={() => setRegistrationModel(false)}
      />
    </div>
  );
};

export default HeaderWrapper(Header);
