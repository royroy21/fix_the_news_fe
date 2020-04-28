import NewsItem from "../NewsItem";
import React from "react";
import CategoryNewsItemsWrapper from "./wrapper";
import {initialCategoryNewsItemState} from "../../store/reducers/categoryNewsItems";
import NeverEndingScrollingUsingRedux
  from "../NeverEndingScrolling/NeverEndingScrollingUsingRedux";

const NewsItems = ({id, actions, categoryId, store, topicId, style={}}) => {
  const NewsItems =
    store.categoryNewsItems[categoryId]
    || initialCategoryNewsItemState;

  const getInitialRequest = () => {
    actions.getCategoryNewsItems(null, {
      topic: topicId,
      category: categoryId,
    });
  };

  return (
    <NeverEndingScrollingUsingRedux
      getInitialRequest={getInitialRequest}
      getNext={actions.getCategoryNewsItems}
      id={id}
      ItemComponent={NewsItem}
      store={NewsItems}
      style={style}
    />
  )
};

export default CategoryNewsItemsWrapper(NewsItems);
