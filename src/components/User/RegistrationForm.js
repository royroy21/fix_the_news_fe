import Form from "../Form/Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class RegistrationForm extends Form {

  state = {
    formData: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    showPassword: false,
  };

  componentDidMount() {
    this.props.actions.clear();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.formData.append("re_password", this.state.formData.password);
    this.props.actions.create(this.formData);
  };

  toggleShowPassword = () => {
    this.setState(state => {
      return {showPassword: !state.showPassword}
    })
  };

  getFields() {
    return (
      <Fragment>
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          autoFocus
          required
          id="first_name"
          label="First name"
          name="first_name"
          value={this.state.formData.username}
          onChange={this.handleChange}
          margin="normal"
        />
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          id="last_name"
          label="Last name"
          name="last_name"
          value={this.state.formData.username}
          onChange={this.handleChange}
          margin="normal"
        />
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          required
          id="email"
          label="Email"
          name="email"
          value={this.state.formData.email}
          onChange={this.handleChange}
          margin="normal"
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
          id="password"
          label="Password"
          name="password"
          value={this.state.formData.password}
          onChange={this.handleChange}
          margin="normal"
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

export default RegistrationForm