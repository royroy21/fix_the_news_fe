import React, {Component} from "react";
import Modal from "@material-ui/core/Modal";
import CustomModalWrapper from "./wrapper";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import CloseButton from "../Button/CloseButton";

const styles = (theme) => ({
  footer: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  headerTitle: {
    color: "grey",
    flexGrow: 1,
  },
  modal: {
    margin: theme.spacing(2),
  },
});

class CustomModal extends Component {

  contentRef = React.createRef();

  state = {
    open: false,
  };

  componentDidMount() {
    if (!this.state.open) {
      this.setState({open: true});
    }
  }

  closeModal = () => {
    this.setState({open: false});
    this.props.history.push("/");
  };

  render() {
    const {height, isMobile} = this.props.store.appDimensions;
    const contentMarginTop = this.contentRef.current
      ? (height - this.contentRef.current.clientHeight) / 2
      : 0;

    const contentStyle = {
      margin: `${contentMarginTop}px auto auto auto`,
      padding: "25px",
      backgroundColor: "white",
    };
    if (!isMobile) {
      contentStyle.maxHeight = height - 200;
      contentStyle.width = 700;
    }

    const { classes } = this.props;
    return (
      <Modal
        className={classes.modal}
        open={this.state.open}
        onClose={this.closeModal}
        onBackdropClick={this.closeModal}
      >
        <div style={contentStyle} ref={this.contentRef}>
          <div className={classes.headerContainer}>
            <div
              className={classes.headerTitle}
              style={isMobile ? {width: "40%"} : undefined}
            >
              {this.props.header}
            </div>
            <CloseButton onClick={this.closeModal} />
          </div>
          <this.props.contentComponent
            {...this.props.contentProps}
            postSuccess={this.closeModal}
          />
          {this.props.footerComponent ? (
            <div className={classes.footer}>
              {this.props.footerComponent}
            </div>
          ) : null}
        </div>
      </Modal>
    )
  }
}

export default withRouter(withStyles(styles)(CustomModalWrapper(CustomModal)));

CustomModal.defaultProps = {
  header: "",
  footerComponent: null,
};

CustomModal.propTypes = {
  contentComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  contentProps: PropTypes.object.isRequired,
  footerComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  header: PropTypes.string.isRequired,
};
