import React, {Component} from "react";
import Modal from "@material-ui/core/Modal";
import CustomModalWrapper from "./wrapper";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import CloseButton from "../CustomButton/CloseButton";

const styles = (theme) => ({
  footer: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  headerContainer: {
    width: "100%",
  },
  headerTitle: {
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
    paddingTop: 10,
    textAlign: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    overflow: "auto",
  },
});

class CustomModal extends Component {

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
    this.props.history.goBack();
  };

  render() {
    const {
      height,
      isMobile,
    } = this.props.store.appDimensions;

    const contentStyle = {
      padding: "25px",
      backgroundColor: "white",
    };
    if (!isMobile) {
      contentStyle.maxHeight = height - 200;
    }
    if (!this.props.noWidth) {
      contentStyle.width = isMobile ? "90%" : 700;
    }

    const { classes } = this.props;
    return (
      <Modal
        className={classes.modal}
        open={this.state.open}
        onClose={this.closeModal}
        onBackdropClick={this.closeModal}
      >
        <div style={contentStyle}>
          <div className={classes.headerContainer}>
            <CloseButton onClick={this.closeModal} />
            <div className={classes.headerTitle}>
              {this.props.header}
            </div>
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
  noWidth: false,
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
  noWidth: PropTypes.bool.isRequired,
};
