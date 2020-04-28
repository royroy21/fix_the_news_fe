import Topic from "../Topic";
import React from "react";
import TopicsWrapper from "./wrapper";
import NeverEndingScrollingUsingRedux
  from "../NeverEndingScrolling/NeverEndingScrollingUsingRedux";

const Topics = ({id, actions, store, style={}}) => {
  return (
    <NeverEndingScrollingUsingRedux
      getInitialRequest={actions.getNextTopics}
      getNext={actions.getNextTopics}
      id={id}
      store={store.topics}
      style={style}
      ItemComponent={Topic}
    />
  )
};

export default TopicsWrapper(Topics);
