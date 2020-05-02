import Topic from "../Topic";
import React from "react";
import TopicsWrapper from "./wrapper";
import NeverEndingScrolling from "../NeverEndingScrolling";

const Topics = ({id, actions, store, style={}}) => {
  if (store.appDimensions.isMobile === null) {
    return null;
  }

  const getInitialRequest = () => {
    const params = store.appDimensions.isMobile ? {size: 3} : {};
    actions.getTopics(params);
  };
  return (
    <NeverEndingScrolling
      getInitialRequest={getInitialRequest}
      getNext={actions.getTopics}
      id={id}
      store={store.topics}
      style={style}
      ItemComponent={Topic}
    />
  )
};

export default TopicsWrapper(Topics);
