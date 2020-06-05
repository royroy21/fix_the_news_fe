import React from "react";
import {
  localStorageAuthTokenKey,
  loginRoute,
  registrationRoute
} from "../../settings";
import Button from "../CustomButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {makeStyles} from "@material-ui/core/styles";
import UserDisplay from "../User/UserDisplay";
import {Link} from "react-router-dom";
import LoginButton from "../CustomButton/LoginButton";
import ButtonLink from "../CustomButton/ButtonLink";

export const useStyles = makeStyles(theme => ({
  buttonDivider: {
    color: theme.palette.primary.main,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    display: "flex",
    height: "100%",
    paddingLeft: theme.spacing(1),
    position: "relative",
  },
  link: {
    color: theme.palette.primary.dark,
    textDecoration: "none",
  },
  loginButtonAndDividerContainer: {
    marginTop: 12,
  },
  loggedInButtons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(1),
    height: 50,
  },
  loginButtons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(1),
  },
  subLinks: {
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    position: "absolute",
    width: "100%",
  },
}));

const MenuItems = ({clearUser, user}) => {
  const logout = () => {
    clearUser();
    localStorage.removeItem(localStorageAuthTokenKey);
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
    {!!!user ? (
      <div className={classes.loginButtons}>
        <div className={classes.loginButtonAndDividerContainer}>
          <LoginButton to={loginRoute}/>
          <span className={classes.buttonDivider}>{"/"}</span>
        </div>
        <ButtonLink
          to={registrationRoute}
          label={"Sign Up"}
          inverted={true}
        />
      </div>
    ) : (
      <div className={classes.loggedInButtons}>
        <UserDisplay userObject={user} />
        <Button
          onClick={logout}
          icon={<ExitToAppIcon />}
          style={{marginBottom: 12, marginLeft: 5}}
        />
      </div>
    )}
      <div className={classes.subLinks}>
        <Link className={classes.link} to={""}>{"Contact Us"}</Link>
        <Link className={classes.link} to={""}>{"About"}</Link>
        <Link className={classes.link} to={""}>{"Help"}</Link>
      </div>
    </div>
  )
};

export default MenuItems;
