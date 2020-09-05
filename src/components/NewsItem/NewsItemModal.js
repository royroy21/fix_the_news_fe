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
        buttonLabel: "Add News",
        categories: modelProps.categories,
        storeObject: store.newsItem,
        successMessage: "News successfully added",
        topicId: modelProps.topicId,
        isMobile: store.appDimensions.isMobile,
      }}
      header={"Add News"}
      subHeader={"Have we missed something? Add a news story and show us a different view."}
    />
  )
};

export default NewsItemWrapper(NewsItemModal);
