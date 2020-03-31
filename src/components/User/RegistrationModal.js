import React from "react";
import CustomModal from "../CustomModal";
import RegistrationForm from "./RegistrationForm";
import UserWrapper from "./wrapper";

const RegistrationModal = (props) => {
  return (
    <CustomModal
      contentComponent={RegistrationForm}
      contentProps={{
        actions:{
          clearRegister: props.actions.clearRegister,
          postRegister: props.actions.postRegister,
        },
        buttonLabel: "Submit",
        storeObject: props.store.register,
        successMessage: "User registration successful",
        isMobile: props.store.appDimensions.isMobile,
      }}
    />
  )
};

export default UserWrapper(RegistrationModal);
