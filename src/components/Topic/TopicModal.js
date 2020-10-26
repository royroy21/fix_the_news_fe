import React from "react";
import CustomModal from "../CustomModal";
import TopicWrapper from "./wrapper";
import TopicForm from "./TopicForm";

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
        successMessage: "Topic successfully added",
      }}
      header={"Add Topic"}
      subHeader={"If accepted your topic will appear on Fixthenews shortly."}
    />
  )
};

export default TopicWrapper(TopicModal);
