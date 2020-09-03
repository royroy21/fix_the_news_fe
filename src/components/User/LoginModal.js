import React from "react";
import CustomModal from "../CustomModal";
import UserWrapper from "./wrapper";
import LoginForm from "./LoginForm";

const LoginModal = ({actions, store, open, onClose}) => {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      ContentComponent={LoginForm}
      contentProps={{
        actions: {
          postToken: actions.postToken,
          clearToken: actions.clearToken,
          clearUser: actions.clearUser,
        },
        buttonLabel: "Login",
        storeObject: store.token,
        successMessage: "Login successful",
        isMobile: store.appDimensions.isMobile,
      }}
      header={"Login to your account"}
    />
  )
};

export default UserWrapper(LoginModal);
