import React, {Fragment, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeaderWrapper from "./wrapper";
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
}));

const Header = (props) => {

  const [
    openRegistrationModel,
    setRegistrationModel,
  ] = useState(false);

  const classes = useStyles();

  const { object:user } = props.store.user;

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
            <p>{`${user.first_name}, ${user.first_name}`}</p>
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
