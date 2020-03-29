import React, {Component} from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CustomModalWrapper from "./wrapper";
import PropTypes from "prop-types";

class CustomModal extends Component {

  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
  }

  render() {
    const {height, isMobile} = this.props.store.appDimensions;
    const contentHeight = height - 200;
    const contentWidth = isMobile ? "100%" : "700px";
    const contentMarginTop = this.contentRef.current
      ? (height - this.contentRef.current.clientHeight) / 2
      : 0;

    const contentStyle = {
      height: "auto",
      maxHeight: contentHeight,
      width: contentWidth,
      margin: `${contentMarginTop}px auto auto auto`,
      padding: "25px",
      backgroundColor: "white",
    };

    return (
      <Modal
        open={this.props.open}
        onClose={this.props.closeModal}
        onBackdropClick={this.props.closeModal}
      >
        <div style={contentStyle} ref={this.contentRef}>
          <Button
            color={"secondary"}
            onClick={this.props.closeModal}
            variant={"contained"}
          >
            {"X"}
          </Button>
          {this.props.content}
        </div>
      </Modal>
    )
  }
}

export default CustomModalWrapper(CustomModal);

CustomModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
};
