import NeverEndingScrolling from "../NeverEndingScrolling";
import NewsItem from "../NewsItem";
import React from "react";

const NewsItems = ({initialURL, style={}}) => {
  return (
    <NeverEndingScrolling
      ItemComponent={NewsItem}
      initialURL={initialURL}
      style={style}
    />
  )
};

export default NewsItems;
