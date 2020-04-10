import Topic from "../Topic/Topic";
import NeverEndingScrolling from "../NeverEndingScrolling";
import React from "react";

const Topics = ({id, initialURL, style={}}) => {
  return (
    <NeverEndingScrolling
      id={id}
      ItemComponent={Topic}
      initialURL={initialURL}
      style={style}
    />
  )
};

export default Topics;
