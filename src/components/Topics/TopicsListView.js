import TopicListView from "../Topic/TopicListView";
import React from "react";
import NeverEndingScrolling from "../NeverEndingScrolling";
import {TOPIC_PAGE_SIZE_FOR_DESKTOP} from "../../settings";

const TopicsListView = ({id='topics', actions, store}) => {
  return (
    <NeverEndingScrolling
      getInitialRequest={() => actions.getTopics({size: TOPIC_PAGE_SIZE_FOR_DESKTOP})}
      getNext={actions.getTopics}
      id={id}
      store={store.topics}
      ItemComponent={TopicListView}
    />
  )
};

export default TopicsListView;
