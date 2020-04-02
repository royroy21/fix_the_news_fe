import React, {Component} from 'react';
import TopicsWrapper from "./wrapper";

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
      this.props.store.topics.objects.results.map(topic => <p key={`topic-${topic.id}`}>{topic.title}</p>)
    )
  }
}

export default TopicsWrapper(TopicsContainer);
