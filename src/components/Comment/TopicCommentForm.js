import Form from "../Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {userNotLoggedInRoute} from "../../settings";

class TopicCommentForm extends Form {

  state = {
    formData: {
      text: "",
      topic: "",
    },
  };

  componentDidMount() {
    this.setFormDefaults();
    this.props.actions.clearComment();
  }

  setFormDefaults() {
    const topicId = this.props.topicId;
    this.setState(state => ({
      formData: {
        ...state.formData,
        topic: topicId,
      }}));
    this.formData.set("topic", topicId);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.formData.text) return;
    this.props.actions.postTopicComment(this.formData);
    this.resetTextField();
  };

  resetTextField = () => {
    this.setState(state => ({formData: {...state.formData, text: ''}}));
  };

  handleOnClick = () => {
    if (!this.props.user.object) {
      this.props.history.push(userNotLoggedInRoute);
    }
  };

  getFields() {
    return (
      <Fragment>
        <Field
          Field={TextField}
          disabled={!this.props.user.object}
          error={this.props.storeObject.error}
          id={"text"}
          label={"Add comment"}
          name={"text"}
          value={this.state.formData.text}
          onChange={this.handleChange}
          onClick={this.handleOnClick}
          margin={"normal"}
          variant={"outlined"}
        />
      </Fragment>
    )
  }

}

export default withRouter(TopicCommentForm);

TopicCommentForm.propTypes = {
  user: PropTypes.object.isRequired,
};
