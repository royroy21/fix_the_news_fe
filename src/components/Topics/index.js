import Topic from "../Topic";
import React from "react";
import TopicsWrapper from "./wrapper";
import NeverEndingScrolling from "../NeverEndingScrolling";
import {TOPIC_PAGE_SIZE_FOR_MOBILE} from "../../settings";

const Topics = ({id, actions, store, style={}}) => {
  if (store.appDimensions.isMobile === null) {
    return null;
  }

  const getInitialRequest = () => {
    const params = store.appDimensions.isMobile
      ? {size: TOPIC_PAGE_SIZE_FOR_MOBILE}
      : {};
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
