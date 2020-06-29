import Form from "../Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import PropTypes from "prop-types";
import Button from "../CustomButton";
import ImageIcon from '@material-ui/icons/Image';

class RegistrationForm extends Form {

  imageInput = React.createRef();

  state = {
    formData: {
      avatar: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    showPassword: false,
  };

  componentDidMount() {
    this.props.actions.clearRegister();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.formData.append("re_password", this.state.formData.password);
    this.props.actions.postRegister(this.formData, this.props.isMobile);
  };

  toggleShowPassword = () => {
    this.setState(state => {
      return {showPassword: !state.showPassword}
    })
  };

  removeAvatar = () => {
    const formData = {
      ...this.state.formData,
      avatar: null,
    };
    this.setState({formData});
    this.formData.delete("avatar");
    this.imageInput.value = null;
  };

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
        </div>
        {avatar && (
          <div style={{
            display: "flex",
            flexDirection: "row",
            height: 50,
          }}>
            <ImageIcon color={"secondary"} style={{marginTop: 10}}/>
            <p>{avatar.name}</p>
          </div>
        )}
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
        <Field
          Field={TextField}
          type={
            this.state.showPassword
              ? "text"
              : "password"
          }
          error={this.props.storeObject.error}
          required
          id={"password"}
          label={"Password"}
          name={"password"}
          value={this.state.formData.password}
          onChange={this.handleChange}
          margin={"normal"}
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.showPassword}
              onChange={this.toggleShowPassword}
            />
          }
          label={
            this.state.showPassword
              ? "Password visible"
              : "Password hidden"
          }
        />
      </Fragment>
    )
  }

}

export default RegistrationForm;

RegistrationForm.PropTypes = {
  isMobile: PropTypes.bool.isRequired,
};
