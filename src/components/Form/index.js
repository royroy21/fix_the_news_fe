import React from 'react';
import LoadingModal from "../LoadingModal";
import FormGroup from "@material-ui/core/FormGroup";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Error from "./Error";

class Form extends React.Component {

  state = {
    formData: {
    },
  };

  formData = new FormData();

  handleSubmit = (event) => {
    throw Error("handleSubmit method not implemented");
  };

  handleChange = (event) => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value,
    };
    this.setState({formData});
    this.formData.append(event.target.name, event.target.value);
  };

  handleChangeFile = (event, fieldName) => {
    const formData = {
      ...this.state.formData,
      [fieldName]: event.target.files[0],
    };
    this.setState({formData});
    this.formData.append(fieldName, event.target.files[0]);
  };

  getFields() {
    throw Error("getFields method not implemented");
  }

  render(){
    const {
      error,
      loading,
    } = this.props.storeObject;
    return (
      <form onSubmit={this.handleSubmit} autoComplete={"off"}>
        <FormGroup>
          {this.getFields()}
          <Error
            name={"non_field_errors"}
            error={error}
          />
          <Button
            color={"secondary"}
            style={{width: 100, margin: "auto"}}
            type={"submit"}
            variant={"contained"}
          >
            {this.props.buttonLabel}
          </Button>
          <LoadingModal
            loading={loading}
            error={!!error}
            successMessage={this.props.successMessage}
            withSuccess
            postSuccess={this.props.postSuccess}
          />
        </FormGroup>
      </form>
    )
  }
}

export default Form;

Form.propTypes = {
  storeObject: PropTypes.object,
  successMessage: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  postSuccess: PropTypes.func,
};
