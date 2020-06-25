import React from "react";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LogoutWrapper from "./wrapper";
import Button from "../CustomButton";
import {TOPIC_PAGE_SIZE_FOR_MOBILE} from "../../settings";

const Logout = ({actions, store}) => {

  const logout = () => {
    actions.clearUser();
    actions.clearToken();
    localStorage.clear();
    const params = store.appDimensions.isMobile
      ? {size: TOPIC_PAGE_SIZE_FOR_MOBILE}
      : {};
    actions.getTopics(params);
  };

  return (
    <Button
      onClick={logout}
      icon={<MeetingRoomIcon fontSize={"large"}/>}
    />
  )
};

export default LogoutWrapper(Logout);
