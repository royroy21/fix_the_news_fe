import React from "react";
import CustomModal from "../CustomModal";
import NewsItemForm from "./NewsItemForm";
import NewsItemWrapper from "./wrapper";

const NewsItemModal = ({actions, location, store}) => {
  return (
    <CustomModal
      contentComponent={NewsItemForm}
      contentProps={{
        actions: {
          postNewsItem: actions.postNewsItem,
          clearNewsItem: actions.clearNewsItem,
        },
        buttonLabel: "Add",
        categories: location.state.categories,
        storeObject: store.newsItem,
        successMessage: "Article successfully added",
        topicId: location.state.topicId,
        isMobile: store.appDimensions.isMobile,
      }}
      header={"Add Article"}
    />
  )
};

export default NewsItemWrapper(NewsItemModal);
