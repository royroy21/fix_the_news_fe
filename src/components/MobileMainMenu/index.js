import React, {Component} from "react";
import Modal from "@material-ui/core/Modal";
import {withRouter} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import MenuItems from "./MenuItems";
import MobileMainMenuWrapper from "./wrapper";
import Button from "../Button";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.primary.light,
    float: "right",
    height: "20%",
    padding: theme.spacing(1),
    width: "100%",
  }
});

class MobileMainMenu extends Component {
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
    const { classes } = this.props;
    return (
      <Modal
        open={this.state.open}
        onClose={this.closeModal}
        onBackdropClick={this.closeModal}
      >
        <div className={classes.content}>
          <Button
            icon={<CloseIcon />}
            onClick={this.closeModal}
            style={{float: "right"}}
          />
          <MenuItems
            clearUser={this.props.actions.clearUser}
            user={this.props.store.user.object}
          />
        </div>
      </Modal>
    )
  }
}

export default withRouter(withStyles(styles)(MobileMainMenuWrapper(MobileMainMenu)));
