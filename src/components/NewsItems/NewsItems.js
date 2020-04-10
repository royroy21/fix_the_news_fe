import NeverEndingScrolling from "../NeverEndingScrolling";
import NewsItem from "../NewsItem";
import React from "react";

const NewsItems = ({id, initialURL, style={}}) => {
  return (
    <NeverEndingScrolling
      id={id}
      ItemComponent={NewsItem}
      initialURL={initialURL}
      style={style}
    />
  )
};

export default NewsItems;
