import React from "react";
import ButtonForModal from "../CustomButton/ButtonForModal";
import RegistrationModal from "./RegistrationModal";

const RegisterUserLink = () => {
  return (
    <ButtonForModal
      buttonAsLink={true}
      label={"register new user"}
      inverted={true}
      Modal={RegistrationModal}
    />
  )
};

export default RegisterUserLink;
