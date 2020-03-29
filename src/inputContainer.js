import React from "react";
import EmailInput from "./emailInput";
import GenderInput from "./genderInput";

import "./styles/inputStyle.css";

export default class InputContainer extends React.Component {
  state = {
    email: "",
    gender: "",
    dob_age: "",
    date: ""
  };

  updateUserInput = input => {
    this.setState({
      [input.name]: input.value
    });
  };

  render() {
    return (
      <div className="input-form">
        <h4>input form</h4>
        <form>
          <EmailInput
            updateUserInput={this.updateUserInput}
            email={this.state.email}
          />
          <GenderInput
            updateUserInput={this.updateUserInput}
            gender={this.state.gender}
          />
          <p>--|{this.state.email}|--</p>
          <p>--|{this.state.gender}|--</p>
          <p>--|{this.state.dob_age}|--</p>
          <p>--|{this.state.date}|--</p>
        </form>
      </div>
    );
  }
}
