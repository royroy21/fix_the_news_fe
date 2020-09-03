import React from "react";
import MessageForm from "./MessageForm";
import CustomModal from "../CustomModal";

const BaseMessageModal = ({open, onClose, actions, store, header, type}) => {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      ContentComponent={MessageForm}
      contentProps={{
        actions: actions,
        buttonLabel: 'Send Message',
        storeObject: store.message,
        successMessage: 'Message Sent',
        type: type,
        user: store.user,
      }}
      header={header}
      footerComponent={
        <div style={{color: 'grey'}}>
          {'We\'ll get back to you via email'}
        </div>
      }
    />
  )
}

export default BaseMessageModal;
