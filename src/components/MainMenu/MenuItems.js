import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserDisplay from "../User/UserDisplay";
import {Link} from "react-router-dom";
import LogoutButton from "../CustomButton/LogoutButton";
import MenuItem from "./MenuItem";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MapIcon from '@material-ui/icons/Map';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LoginRegistration from "../CustomButton/LoginRegistration";

export const useStyles = makeStyles(theme => ({
  container: {
    height: "90%",
    paddingLeft: theme.spacing(1),
    position: "relative",
  },
  link: {
    color: theme.palette.primary.dark,
    textDecoration: "none",
  },
  loggedInButtons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(1),
    height: 40,
    width: "90%",
  },
  menuItems: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
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
      <LoginRegistration />
    ) : (
      <div className={classes.loggedInButtons}>
        <UserDisplay userObject={user} />
        <LogoutButton />
      </div>
    )}
      <div className={classes.menuItems}>
        <MenuItem icon={<AccountBoxIcon color={"secondary"} />} label={"Account"} to={""} />
        <MenuItem icon={<AddBoxIcon color={"secondary"} />} label={"Add Topic"} to={""} />
        <MenuItem icon={<MapIcon color={"secondary"} />} label={"Road map"} to={""} />
      </div>
      <div className={classes.subLinks}>
        <Link className={classes.link} to={""}>{"Contact Us"}</Link>
        <Link className={classes.link} to={""}>{"About"}</Link>
        <Link className={classes.link} to={""}>{"Help"}</Link>
      </div>
    </div>
  )
};

export default MenuItems;
