import React from "react";
import NewsItem from "../NewsItem";
import CategoryNewsItemsWrapper from "./wrapper";
import {initialCategoryNewsItemState} from "../../store/reducers/categoryNewsItems";
import NeverEndingScrolling from "../NeverEndingScrolling";

const NewsItems = ({id, actions, categoryId, horizontal=false, store, topicId, style={}}) => {
  const newsItems =
    store.categoryNewsItems[categoryId]
    || initialCategoryNewsItemState;

  const getInitialRequest = () => {
    const params = {
      topic: topicId,
      category: categoryId,
    };
    if (horizontal) {
      params.size = 5;
    }
    actions.getCategoryNewsItems(params);
  };

  const neverEndingScrollingStyle = horizontal
    ? {
        ...style,
        display: "flex",
        flexDirection: "row",
      }
    : style;

  return (
    <NeverEndingScrolling
      getInitialRequest={getInitialRequest}
      getNext={actions.getCategoryNewsItems}
      id={id}
      ItemComponent={NewsItem}
      store={newsItems}
      style={neverEndingScrollingStyle}
    />
  )
};

export default CategoryNewsItemsWrapper(NewsItems);
