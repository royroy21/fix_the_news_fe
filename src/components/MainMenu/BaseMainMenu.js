import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import MenuItems from "./MenuItems";
import CloseButton from "../CustomButton/CloseButton";
import { useLastLocation } from 'react-router-last-location';

const BaseMainMenu = ({history, store, classes, style}) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    if (open) {
      return;
    }
    setOpen(true);
  };
  useEffect(openMenu);

  const lastLocation = useLastLocation();
  const closeModal = () => {
    setOpen(false);
    const goToPath = lastLocation ? lastLocation.pathname : "/";
    history.push(goToPath);
  };

  return (
    <Modal
      open={open}
      onClose={closeModal}
      onBackdropClick={closeModal}
      style={style}
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
