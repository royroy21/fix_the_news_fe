import React from "react";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LogoutWrapper from "./wrapper";
import Button from "../CustomButton";

const Logout = ({actions}) => {

  const logout = () => {
    actions.clearUser();
    actions.clearToken();
    localStorage.clear();
    actions.getTopics();
  };

  return (
    <Button
      onClick={logout}
      icon={<MeetingRoomIcon fontSize={"large"}/>}
    />
  )
};

export default LogoutWrapper(Logout);
