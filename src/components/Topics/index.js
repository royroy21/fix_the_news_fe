import Topic from "../Topic";
import React from "react";
import TopicsWrapper from "./wrapper";
import NeverEndingScrolling from "../NeverEndingScrolling";

const Topics = ({id, actions, store, style={}}) => {
  return (
    <NeverEndingScrolling
      getInitialRequest={actions.getTopics}
      getNext={actions.getTopics}
      id={id}
      store={store.topics}
      style={style}
      ItemComponent={Topic}
    />
  )
};

export default TopicsWrapper(Topics);
