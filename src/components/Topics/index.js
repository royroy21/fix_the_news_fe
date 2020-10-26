import React from "react";
import {LIST_VIEW} from "../../settings";
import TopicsWrapper from "./wrapper";
import TopicsView from "./TopicsView";
import TopicsListView from "./TopicsListView";


const Topics = ({id='topics', actions, store}) => {
  if (LIST_VIEW) {
    return <TopicsListView id={id} actions={actions} store={store} />
  } else {
    return <TopicsView id={id} actions={actions} store={store} />
  }
};

export default TopicsWrapper(Topics);
