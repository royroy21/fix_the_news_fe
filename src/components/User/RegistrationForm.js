import Form from "../Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField, withStyles} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  removeAvatarButton: {
    margin: `${theme.spacing(3)}px 0 0 ${theme.spacing(2)}px`,
    width: 175,
  },
  uploadAvatarButton: {
    marginTop: theme.spacing(3),
    width: 175,
  },
  uploadAvatarContainer: {
    display: "flex",
  },
  uploadAvatarText: {
    margin: `${theme.spacing(4)}px 0 0 ${theme.spacing(2)}px`,
  },
});

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
    this.props.actions.postRegister(this.formData);
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
    const { classes } = this.props;
    const { avatar } = this.state.formData;
    return (
      <Fragment>
        <input
          id={"avatar"}
          ref={imageInput => this.imageInput = imageInput}
          style={{display: "none"}}
          type={"file"}
          onChange={(event) => this.handleChangeFile(event, "avatar")}
        />
        <div className={classes.uploadAvatarContainer}>
          <Button
            onClick={() => this.imageInput.click()}
            className={classes.uploadAvatarButton}
            variant={"outlined"}
          >
            {avatar ? "Change Avatar" : "Add Avatar"}
          </Button>
          {avatar ? (
            <Button
              onClick={this.removeAvatar}
              className={classes.removeAvatarButton}
              variant={"outlined"}
            >
              {"Remove Avatar"}
            </Button>
          ) : null}
          {avatar ? (
            <p className={classes.uploadAvatarText}>
              {avatar.name}
            </p>
          ) : null}
        </div>
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          autoFocus
          required
          id={"first_name"}
          label={"First name"}
          name={"first_name"}
          value={this.state.formData.username}
          onChange={this.handleChange}
          margin={"normal"}
        />
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          id={"last_name"}
          label={"Last name"}
          name={"last_name"}
          value={this.state.formData.username}
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

export default withStyles(styles)(RegistrationForm);
