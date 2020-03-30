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
