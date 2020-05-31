import Form from "../Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";

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

  getFields() {
    return (
      <Fragment>
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          id={"text"}
          label={"Add comment"}
          name={"text"}
          value={this.state.formData.text}
          onChange={this.handleChange}
          margin={"normal"}
          variant={"outlined"}
        />
      </Fragment>
    )
  }

}

export default TopicCommentForm;
