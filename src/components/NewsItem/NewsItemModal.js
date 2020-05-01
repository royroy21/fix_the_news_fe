import React from "react";
import CustomModal from "../CustomModal";
import NewsItemForm from "./NewsItemForm";
import NewsItemWrapper from "./wrapper";

const NewsItemModal = (props) => {
  return (
    <CustomModal
      contentComponent={NewsItemForm}
      contentProps={{
        actions: {
          postNewsItem: props.actions.postNewsItem,
          clearNewsItem: props.actions.clearNewsItem,
        },
        buttonLabel: "Add",
        categories: props.location.state.categories,
        storeObject: props.store.newsItem,
        successMessage: "Article successfully added",
        topicId: props.location.state.topicId,
      }}
      header={"Add Article"}
    />
  )
};

export default NewsItemWrapper(NewsItemModal);
