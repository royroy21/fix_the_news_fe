import Form from "../Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "../CustomButton";

class EditUserForm extends Form {

  imageInput = React.createRef();

  state = {
    formData: {
      avatar: "",
      first_name: "",
      last_name: "",
      email: "",
    },
  };

  componentDidMount() {
    this.setState({formData: {
      avatar: this.props.storeObject.object.avatar,
      first_name: this.props.storeObject.object.first_name,
      last_name: this.props.storeObject.object.last_name,
      email: this.props.storeObject.object.email,
    }})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.patchUser(this.formData);
  };

  removeAvatar = () => {
    const formData = {
      ...this.state.formData,
      avatar: null,
    };
    this.setState({formData});
    this.formData.set("avatar", "");
    this.imageInput.value = null;
  };

  getAvatarDisplayText(avatar) {
    if (avatar.name) {
      // Added by user just now so is an object
      return avatar.name;
    }
    if (avatar) {
      // Already existing so is a URL
      const splitURL = avatar.split("/");
      return splitURL[splitURL.length - 1];
    }
    return null;
  }


  getFields() {
    const { isMobile } = this.props;
    const { avatar } = this.state.formData;

    const uploadAvatarContainer = isMobile
      ? {
          display: "flex",
          flexDirection: "column",
          margin: "0 auto 0 auto",
          width: isMobile ? 150 : undefined
        }
      : {
          margin: "0 auto 0 auto",};

    const avatarButtonStyle = {
        marginTop: 20,
        marginRight: !isMobile ? 5 : undefined,
        padding: 5,
        width: !isMobile ? 150 : undefined,
    };

    return (
      <Fragment>
        <input
          id={"avatar"}
          ref={imageInput => this.imageInput = imageInput}
          style={{display: "none"}}
          type={"file"}
          onChange={(event) => this.handleChangeFile(event, "avatar")}
        />
        <div style={uploadAvatarContainer}>
          <Button
            label={avatar ? "Change Avatar" : "Add Avatar"}
            onClick={() => this.imageInput.click()}
            style={avatarButtonStyle}
          />
          {avatar ? (
            <Button
              label={"Remove Avatar"}
              onClick={this.removeAvatar}
              style={avatarButtonStyle}
            />
          ) : null}
          {avatar && (
            <p>{this.getAvatarDisplayText(avatar)}</p>
          )}
        </div>
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          required
          id={"first_name"}
          label={"First name"}
          name={"first_name"}
          value={this.state.formData.first_name}
          onChange={this.handleChange}
          margin={"normal"}
        />
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          id={"last_name"}
          label={"Last name"}
          name={"last_name"}
          value={this.state.formData.last_name}
          onChange={this.handleChange}
          margin={"normal"}
        />
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          required
          id={"email"}
          label={"Email"}
          name={"email"}
          value={this.state.formData.email}
          onChange={this.handleChange}
          margin={"normal"}
        />
      </Fragment>
    )
  }

}

export default EditUserForm;

EditUserForm.PropTypes = {
  isMobile: PropTypes.bool.isRequired,
};
