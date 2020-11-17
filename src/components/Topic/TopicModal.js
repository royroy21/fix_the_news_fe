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
        buttonLabel: "Add Question",
        storeObject: store.topic,
        successMessage: "Question successfully added for vetting",
      }}
      header={"Looking for a different perspective on the news? Add a question!"}
      subHeader={"Our team will review your question and add it shortly."}
    />
  )
};

export default TopicWrapper(TopicModal);
