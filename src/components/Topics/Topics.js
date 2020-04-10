import Topic from "../Topic/Topic";
import NeverEndingScrolling from "../NeverEndingScrolling";
import React from "react";

const Topics = ({initialURL, style={}}) => {
  return (
    <NeverEndingScrolling
      ItemComponent={Topic}
      initialURL={initialURL}
      style={style}
    />
  )
};

export default Topics;
