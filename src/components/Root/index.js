import React, {Component} from 'react';
import Header from "../Header";
import RootWrapper from "./wrapper";
import {localStorageAuthTokenKey, topicsURL} from "../../settings";
import Routes from "../Routes";
import TopicsContainer from "../Topics/TopicsContainer";

class Root extends Component {

  MOBILE_WIDTH = 900;

  state = {
    screenWidth: 0,
    screenHeight: 0,
  };

  componentDidMount() {
    const authTokenFromRedux = this.props.store.token.object;
    const authTokenFromLocalStorage =
      localStorage.getItem(localStorageAuthTokenKey);
    if (!authTokenFromRedux && authTokenFromLocalStorage) {
      this.props.actions.updateToken({
        "auth_token": authTokenFromLocalStorage,
      });
      this.props.actions.getUser();
    }

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    }, () => this.props.actions.updateDimensions({
      height: this.state.screenHeight,
      width: this.state.screenWidth,
      isMobile: this.getIsMobile(),
    }));
  };

  getIsMobile = () => {
    return this.state.screenWidth < this.MOBILE_WIDTH;
  };

  render() {
    const isMobile = this.getIsMobile();
    const width = isMobile ? "100%" : "70%";

    const outerContainerStyle = {
      backgroundColor: "#FAFAFA",
      display: "flex",
      height: `${this.state.screenHeight}px`,
      width: "100%",
    };

    const innerContainerStyle = {
      display: "flex",
      flexDirection: "column",
      width,
      margin: "0 auto 0 auto",
    };

    return (
      <div style={outerContainerStyle}>
        <div style={innerContainerStyle}>
          <Routes />
          <Header />
          <TopicsContainer initialURL={topicsURL} />
        </div>
      </div>
    )
  }

}

export default RootWrapper(Root);
