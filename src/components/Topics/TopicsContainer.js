import React, {Component} from 'react';
import TopicsWrapper from "./wrapper";
import TopicContainer from "../Topic/TopicContainer";
import Loading from "../Loading/Loading";

class TopicsContainer extends Component {

  componentDidMount() {
    if (!!!this.props.store.topics.objects) {
      this.props.actions.getTopics();
    }
  }

  render() {
    const {loading, objects} = this.props.store.topics;
    const results = !!objects ? objects.results : [];
    return (
      <div style={{height: "100%"}}>
        {loading ? (
          <Loading />
          ) : (
          results.map(topic => (
            <TopicContainer
              key={`topic-${topic.id}`}
              topic={topic}
            />
            ))
        )}
      </div>
    )
  }
}

export default TopicsWrapper(TopicsContainer);
