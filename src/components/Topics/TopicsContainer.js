import React, {Component} from 'react';
import TopicsWrapper from "./wrapper";
import TopicContainer from "../Topic/TopicContainer";

class TopicsContainer extends Component {

  componentDidMount() {
    if (!!!this.props.store.topics.objects) {
      this.props.actions.getTopics();
    }
  }

  render() {
    if (!!!this.props.store.topics.objects) {
      return null;
    }

    return (
      this.props.store.topics.objects.results.map(topic => (
        <TopicContainer
          key={`topic-${topic.id}`}
          topic={topic}
        />
        )
      )
    )
  }
}

export default TopicsWrapper(TopicsContainer);
