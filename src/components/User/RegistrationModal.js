import React from "react";
import CustomModal from "../CustomModal";
import RegistrationForm from "./RegistrationForm";
import UserWrapper from "./wrapper";

const RegistrationModal = ({closeModal, open, ...rest}) => {
  return (
    <CustomModal
      closeModal={closeModal}
      content={
        <RegistrationForm
          actions={{
            clearRegister: rest.actions.clearRegister,
            postRegister: rest.actions.postRegister,
          }}
          buttonLabel={"Submit"}
          storeObject={rest.store.register}
          successMessage={"User registration successful"}
          postSuccess={closeModal}
          isMobile={rest.store.appDimensions.isMobile}
        />
      }
      open={open}
    />
  )
};

export default UserWrapper(RegistrationModal);
