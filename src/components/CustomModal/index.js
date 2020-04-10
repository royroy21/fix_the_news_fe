import React, {Component} from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CustomModalWrapper from "./wrapper";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {withStyles} from "@material-ui/core";

const styles = (theme) => ({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  headerTitle: {
    color: "grey",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  footer: {
    marginTop: theme.spacing(3),
    textAlign: "center",
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

    const { classes } = this.props;
    return (
      <Modal
        open={this.state.open}
        onClose={this.closeModal}
        onBackdropClick={this.closeModal}
      >
        <div style={contentStyle} ref={this.contentRef}>
          <div className={classes.headerContainer}>
            <Button
              color={"secondary"}
              onClick={this.closeModal}
              variant={"contained"}
            >
              {"X"}
            </Button>
            <span className={classes.headerTitle}>
              {this.props.header}
            </span>
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
