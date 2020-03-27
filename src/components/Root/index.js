import React, {Component} from 'react';
import Header from "../Header";

class Root extends Component {

  MOBILE_WIDTH = 900;

  state = {
    screenWidth: 0,
    screenHeight: 0,
  };

  componentDidMount() {
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
    });
  };

  getIsMobile() {
    return this.state.screenWidth < this.MOBILE_WIDTH;
  }

  render() {
    const isMobile = this.getIsMobile();
    const width = isMobile ? "100%" : "70%";

    const outerContainerStyle = {
      backgroundColor: "#FAFAFA",
      height: `${this.state.screenHeight}px`,
      width: "100%",
    };

    const innerContainerStyle = {
      width,
      margin: "0 auto 0 auto",
    };

    return (
      <div style={outerContainerStyle}>
        <div style={innerContainerStyle}>
          <Header />
        </div>
      </div>
    )
  }

}

export default Root;
