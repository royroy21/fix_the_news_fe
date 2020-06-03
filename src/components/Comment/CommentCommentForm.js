import Form from "../Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {userNotLoggedInRoute} from "../../settings";

class CommentCommentForm extends Form {

  topOfField = React.createRef();

  state = {
    formData: {
      text: "",
      comment: "",
    },
  };

  componentDidMount() {
    this.setFormDefaults();
    this.props.actions.clearComment();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.props.storeObject.loading
        && this.props.storeObject.object
        && prevProps.storeObject.loading) {
      this.onSuccess();
    }
  }

  onSuccess() {
    if (this.props.onSuccess) {
      this.props.onSuccess()
    }
  }

  setFormDefaults() {
    const commentId = this.props.commentId;
    this.setState(state => ({
      formData: {
        ...state.formData,
        comment: commentId,
      }}));
    this.formData.set("comment", commentId);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.props.user.object) {
      this.props.history.push(userNotLoggedInRoute);
      return;
    }
    if (!this.state.formData.text) return;
    this.props.actions.postCommentComment(this.formData);
    this.resetTextField();
  };

  resetTextField = () => {
    this.setState(state => ({formData: {...state.formData, text: ''}}));
  };

  handleOnFocus = (event) => {
    if(this.topOfField.current){
      this.topOfField.current.scrollIntoView({behavior: "smooth"})
    }
  };

  getFields() {
    return (
      <Fragment>
        <div ref={this.topOfField} />
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          id={"text"}
          label={"Add comment"}
          name={"text"}
          value={this.state.formData.text}
          onChange={this.handleChange}
          onFocus={this.handleOnFocus}
          margin={"normal"}
          variant={"outlined"}
        />
      </Fragment>
    )
  }

}

export default withRouter(CommentCommentForm);

CommentCommentForm.propTypes = {
  commentId: PropTypes.number.isRequired,
  onSuccess: PropTypes.func,
  user: PropTypes.object.isRequired,
};
