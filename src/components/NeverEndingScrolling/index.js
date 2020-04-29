import React, {Component} from 'react';
import Loading from "../Loading/Loading";
import PropTypes from "prop-types";
import Error from "../Error";
import {parseURL} from "../../helpers/urlFunctions";

class NeverEndingScrolling extends Component {
  componentDidMount() {
    this.props.getInitialRequest();
  }

  handleScroll = (e) => {
    // This is used to stop parent scroll events from firing
    if (e.target.id !== this.props.id) {
      return
    }
    const bottom = e.target.scrollHeight
      - e.target.scrollTop
      === e.target.clientHeight;
    if (bottom && !this.props.store.loading) {
      const {next: nextURL} = (this.props.store.objects || {});
      if (nextURL) {
        const {params} = parseURL(nextURL);
        this.props.getNext(params);
      }
    }
  };

  render() {
    if (this.props.store.error) {
      return <Error />
    }

    return (
      <div
        id={this.props.id}
        onScroll={this.handleScroll}
        style={{
          ...this.props.style,
          overflowY: "scroll",
        }}
      >
      {this.props.store.items.map(item => (
        <this.props.ItemComponent
          key={`item-component-${item.id}`}
          item={item}
        />
        ))}
        {this.props.store.loading && <Loading />}
      </div>
    );
  }
}

export default NeverEndingScrolling;

NeverEndingScrolling.defaultProps = {
  style: {},
};

NeverEndingScrolling.propTypes = {
  id: PropTypes.string.isRequired,
  getInitialRequest: PropTypes.func.isRequired,
  getNext: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
  ItemComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  style: PropTypes.object.isRequired,
};
