import React, {Component} from 'react';
import Loading from "../Loading/Loading";
import axios from "axios";
import Error from "../Error";

class NeverEndingScrolling extends Component {

  /*
  * For simplicity this component doesn't use redux.
  * To use subclass and override ITEM_COMPONENT and URL.
  * */

  ITEM_COMPONENT = null;
  URL = null;

  SUCCESSFUL_STATUS_CODES = [
    200,
  ];

  state = {
    items: [],
    responseData: null,
    responseLoading: null,
    responseError: null,
  };

  componentDidMount() {
    this.makeCall(this.URL)
  }

  makeCall(url, params={}) {
    this.setState({
      responseData: null,
      responseLoading: true,
      responseError: null,
    });

    return axios.get(url, {params})
      .then(response => this.handleErrors(response))
      .then(response => {
        this.setState(state => (
          {
            items: [...state.items, ...response.data.results],
            responseData: response.data,
            responseLoading: false,
            responseError: null,
          }
        ))
      })
      .catch(error => {
        this.setState({responseError: error.response.data})
      });
  }

  handleErrors(response) {
    if (!this.SUCCESSFUL_STATUS_CODES.includes(response.status)) {
      throw Error(response.data);
    }
    return response;
  }

  handleScroll = (e) => {
    const bottom = e.target.scrollHeight
      - e.target.scrollTop
      === e.target.clientHeight;
    if (bottom) {
      const {next: nextURL} = (this.state.responseData || {});
      if (nextURL) {
        this.makeCall(nextURL)
      }
    }
  };

  render() {
    if (this.state.responseError) {
      return <Error />
    }

    return (
      <div
        onScroll={this.handleScroll}
        style={{
          height: "100%",
          overflowY: "scroll",
        }}
      >
      {this.state.items.map(item => (
        <this.ITEM_COMPONENT
          key={`item-component-${item.id}`}
          item={item}
        />
        ))}
        {this.state.responseLoading && <Loading />}
      </div>
    );
  }
}

export default NeverEndingScrolling;
