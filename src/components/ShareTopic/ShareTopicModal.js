import React from "react";
import CustomModal from "../CustomModal";
import ShareTopic from "./index";

const ShareTopicModal = ({location}) => {
  return (
    <CustomModal
      contentComponent={ShareTopic}
      contentProps={{
        slug: location.state,
      }}
      header={""}
      noWidth={true}
    />
  )
};

export default ShareTopicModal;
