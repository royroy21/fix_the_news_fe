import React from "react";
import MessageWrapper from "./wrapper";
import BaseMessageModal from "./BaseMessageModal";

const HelpModal = ({open, onClose, actions, store}) => {
  return (
    <BaseMessageModal
      open={open}
      onClose={onClose}
      actions={actions}
      store={store}
      type={'help'}
      header={'Need help?'}
    />
  )
}

export default MessageWrapper(HelpModal);
