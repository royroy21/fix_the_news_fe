import React from "react";
import {
  loginRoute,
  registrationRoute
} from "../../settings";
import {makeStyles} from "@material-ui/core/styles";
import UserDisplay from "../User/UserDisplay";
import {Link} from "react-router-dom";
import LoginButton from "../CustomButton/LoginButton";
import ButtonLink from "../CustomButton/ButtonLink";
import LogoutButton from "../CustomButton/LogoutButton";

export const useStyles = makeStyles(theme => ({
  buttonDivider: {
    color: theme.palette.primary.main,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    display: "flex",
    height: "90%",
    paddingLeft: theme.spacing(1),
    position: "relative",
  },
  link: {
    color: theme.palette.primary.dark,
    textDecoration: "none",
  },
  loginButtonAndDividerContainer: {
    marginTop: 12,
    width: 65,
  },
  loggedInButtons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(1),
    height: 40,
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

const MenuItems = ({user}) => {
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
          style={{width: 100}}
        />
      </div>
    ) : (
      <div className={classes.loggedInButtons}>
        <UserDisplay userObject={user} />
        <LogoutButton />
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
