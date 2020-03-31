import React from "react";
import CustomModal from "../CustomModal";
import UserWrapper from "./wrapper";
import LoginForm from "./LoginForm";

const LoginModal = (props) => {
  return (
    <CustomModal
      contentComponent={LoginForm}
      contentProps={{
        actions: {
          postToken: props.actions.postToken,
          clearToken: props.actions.clearToken,
          clearUser: props.actions.clearUser,
        },
        buttonLabel: "Login",
        storeObject: props.store.token,
        successMessage: "Login successful",
      }}
    />
  )
};

export default UserWrapper(LoginModal);
