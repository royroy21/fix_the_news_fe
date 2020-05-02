import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HeaderWrapper from "./wrapper";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  localStorageAuthTokenKey,
  loginRoute,
  registrationRoute
} from "../../settings";
import UserDisplay from "../User/UserDisplay";
import LoginButton from "../Button/LoginButton";
import ButtonLink from "../Button/ButtonLink";
import Button from "../Button";
import Logo from "../Logo";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  buttonDivider: {
    color: theme.palette.primary.main,
    marginLeft: 10,
    marginRight: 10,
  },
  contactUsAboutHelp: {
    fontSize: 14,
    marginLeft: 27,
    marginTop: 5,
    color: "#545C77",
    fontWeight: "bold",
  },
  logoutButton: {
    marginLeft: theme.spacing(2),
  },
  root: {
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

  const toolbarStyle = {
    margin: "auto",
    padding: 0,
    width: props.isSmallScreen ? "100%" : "70%",
  };

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position={"static"}
        className={classes.appBar}
      >
        <Toolbar style={toolbarStyle}>
          <Logo />
          <Typography
            className={classes.contactUsAboutHelp}
            variant={"h6"}
          >
            {"Contact Us"}
          </Typography>
          <Typography
            className={classes.contactUsAboutHelp}
            variant={"h6"}
          >
            {"About"}
          </Typography>
          <Typography
            className={classes.contactUsAboutHelp}
            variant={"h6"} style={{ flexGrow: 1}}
          >
            {"Help"}
          </Typography>
          {!!!user ? (
            <Fragment>
              <LoginButton to={loginRoute}/>
              <span className={classes.buttonDivider}>{"/"}</span>
              <ButtonLink
                to={registrationRoute}
                label={"Sign Up"}
                inverted={true}
              />
            </Fragment>
          ) : (
            <Fragment>
              <UserDisplay userObject={user} />
              <Button
                onClick={logout}
                icon={<ExitToAppIcon />}
                style={{marginLeft: 5}}
              />
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderWrapper(Header);
