import React, {Component} from 'react';

class Root extends Component {

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
    return this.state.screenWidth < 900
  }

  render() {
    const isMobile = this.getIsMobile();
    return (
      <div>
        {!isMobile ? (<p>{"desktop"}</p>) : (<p>{"mobile"}</p>)}
      </div>
    )
  }

}

export default Root;
