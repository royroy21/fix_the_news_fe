import TopicListView from "../Topic/TopicListView";
import React, {Fragment} from "react";
import NeverEndingScrolling from "../NeverEndingScrolling";
import {
  SHOW_ADD_TOPIC_BUTTON,
  TOPIC_PAGE_SIZE_FOR_DESKTOP
} from "../../settings";
import ButtonForModal from "../CustomButton/ButtonForModal";
import AddIcon from "@material-ui/icons/Add";
import TopicModal from "../Topic/TopicModal";

const TopicsListView = ({id='topics', actions, store, isMobile}) => {
  const addTopicStyle = isMobile ? {
      width: "100%",
      margin: "auto",
    }
  : {
      width: 180,
      margin: 2,
    }
  return (
    <Fragment>
      <NeverEndingScrolling
        getInitialRequest={() => actions.getTopics({size: TOPIC_PAGE_SIZE_FOR_DESKTOP})}
        getNext={actions.getTopics}
        id={id}
        store={store.topics}
        ItemComponent={TopicListView}
      />
      {SHOW_ADD_TOPIC_BUTTON && (
        <ButtonForModal
          icon={<AddIcon fontSize={'large'} />}
          label={"Add Topic"}
          Modal={TopicModal}
          style={{
            ...addTopicStyle,
            minHeight: 35,
          }}
        />
      )}
    </Fragment>
  )
};

export default TopicsListView;
