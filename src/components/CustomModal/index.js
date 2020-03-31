import React, {Component} from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CustomModalWrapper from "./wrapper";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

class CustomModal extends Component {

  contentRef = React.createRef();

  state = {
    open: false,
  };

  componentDidMount() {
    if (this.props.history.location.state.open && !this.state.open) {
      this.setState({open: true});
    }
  }

  closeModal = () => {
    this.setState({open: false});
    this.props.history.push("/");
  };

  render() {
    const {height, isMobile, width} = this.props.store.appDimensions;
    const contentMarginTop = this.contentRef.current
      ? (height - this.contentRef.current.clientHeight) / 2
      : 0;

    const contentStyle = {
      margin: `${contentMarginTop}px auto auto auto`,
      padding: "25px",
      backgroundColor: "white",
    };
    if (isMobile) {
      contentStyle.height = height;
      contentStyle.width = width - 50;
    } else {
      contentStyle.maxHeight = height - 200;
      contentStyle.width = 700;
    }

    return (
      <Modal
        open={this.state.open}
        onClose={this.closeModal}
        onBackdropClick={this.closeModal}
      >
        <div style={contentStyle} ref={this.contentRef}>
          <Button
            color={"secondary"}
            onClick={this.closeModal}
            variant={"contained"}
          >
            {"X"}
          </Button>
            <this.props.contentComponent
              {...this.props.contentProps}
              postSuccess={this.closeModal}
            />
        </div>
      </Modal>
    )
  }
}

export default withRouter(CustomModalWrapper(CustomModal));

CustomModal.propTypes = {
  contentComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  contentProps: PropTypes.object.isRequired,
};
