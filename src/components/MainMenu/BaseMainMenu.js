import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import MenuItems from "./MenuItems";
import CloseButton from "../CustomButton/CloseButton";

const BaseMainMenu = ({history, store, classes}) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    if (open) {
      return;
    }
    setOpen(true);
  };
  useEffect(openMenu);

  const closeModal = () => {
    setOpen(false);
    history.push("/");
  };

  return (
    <Modal
      open={open}
      onClose={closeModal}
      onBackdropClick={closeModal}
    >
      <div className={classes.content}>
        <CloseButton
          onClick={closeModal}
          style={{float: "right"}}
        />
        <MenuItems
          user={store.user.object}
        />
      </div>
    </Modal>
  )
};

export default BaseMainMenu;
