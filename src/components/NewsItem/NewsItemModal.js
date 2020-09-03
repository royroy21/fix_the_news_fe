import React from "react";
import CustomModal from "../CustomModal";
import NewsItemForm from "./NewsItemForm";
import NewsItemWrapper from "./wrapper";

const NewsItemModal = ({actions, open, onClose, store, modelProps}) => {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      ContentComponent={NewsItemForm}
      contentProps={{
        actions: {
          postNewsItem: actions.postNewsItem,
          clearNewsItem: actions.clearNewsItem,
        },
        buttonLabel: "Add",
        categories: modelProps.categories,
        storeObject: store.newsItem,
        successMessage: "Article successfully added",
        topicId: modelProps.topicId,
        isMobile: store.appDimensions.isMobile,
      }}
      header={"Add Article"}
    />
  )
};

export default NewsItemWrapper(NewsItemModal);
