import React from "react";
import CustomModal from "../CustomModal";
import UserWrapper from "./wrapper";
import LoginForm from "./LoginForm";

const LoginModal = ({closeModal, open, ...rest}) => {
  return (
    <CustomModal
      closeModal={closeModal}
      content={
        <LoginForm
          actions={{
            postToken: rest.actions.postToken,
            clearToken: rest.actions.clearToken,
            clearUser: rest.actions.clearUser,
          }}
          buttonLabel={"Login"}
          storeObject={rest.store.token}
          successMessage={"Login successful"}
          postSuccess={closeModal}
        />
      }
      open={open}
    />
  )
};

export default UserWrapper(LoginModal);
