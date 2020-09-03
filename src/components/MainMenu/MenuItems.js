import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserDisplay from "../User/UserDisplay";
import {Link} from "react-router-dom";
import LogoutButton from "../CustomButton/LogoutButton";
import MenuItemLink from "./MenuItemLink";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MapIcon from '@material-ui/icons/Map';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LoginRegistration from "../CustomButton/LoginRegistration";
import EditUserModal from "../User/EditUserModal";
import MenuItemModal from "./MenuItemModal";
import {aboutCommunicationRoute} from "../../settings";

export const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
    paddingLeft: theme.spacing(1),
    position: "relative",
    width: "80%",
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
    paddingTop: theme.spacing(3),
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

const MenuItems = ({user, closeParentModel}) => {
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
        {user && <MenuItemModal
          icon={<AccountBoxIcon color={"secondary"} />}
          label={"Account"}
          Modal={EditUserModal}
        />}
        {user && <MenuItemLink
          icon={<AddBoxIcon color={"secondary"} />}
          label={"Add Topic"} to={""}
        />}
        <MenuItemLink
          icon={<MapIcon color={"secondary"} />}
          label={"Road map"} to={""}
        />
      </div>
      <div className={classes.subLinks}>
        <Link className={classes.link} to={""}>{"Contact Us"}</Link>
        <Link
          className={classes.link}
          to={aboutCommunicationRoute}
          onClick={closeParentModel}
        >
          {"About"}
        </Link>
        <Link className={classes.link} to={""}>{"Help"}</Link>
      </div>
    </div>
  )
};

export default MenuItems;
