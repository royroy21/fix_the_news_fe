import TopicContainer from "../Topic/TopicContainer";
import {topicsURL} from "../../settings";
import NeverEndingScrolling from "../NeverEndingScrolling";

class TopicsContainer extends NeverEndingScrolling {
  ITEM_COMPONENT = TopicContainer;
  URL = topicsURL;
}

export default TopicsContainer;
