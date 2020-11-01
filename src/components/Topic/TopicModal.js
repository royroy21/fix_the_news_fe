import React from "react";
import CustomModal from "../CustomModal";
import TopicWrapper from "./wrapper";
import TopicForm from "./TopicForm";
import MustBeLoggedIn from "../User/MustBeloggedIn";

const TopicModal = ({actions, open, onClose, store}) => {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      ContentComponent={TopicForm}
      contentProps={{
        actions: {
          postTopic: actions.postTopic,
          clearTopic: actions.clearTopic,
        },
        buttonLabel: "Add Topic",
        storeObject: store.topic,
        successMessage: "Topic successfully added for vetting",
      }}
      header={"Add Topic"}
      subHeader={"Our team will review your suggestion and add your topic soon."}
      // footerComponent={<MustBeLoggedIn />}
    />
  )
};

export default TopicWrapper(TopicModal);
