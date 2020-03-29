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

  updateUserEmail = email => {
    this.setState({
      email: email
    });
  };

  render() {
    return (
      <div className="input-form">
        <h4>input form</h4>
        <form>
          <EmailInput
            updateUserEmail={this.updateUserEmail}
            email={this.state.email}
          />
          <GenderInput
            // updateUserEmail={this.updateUserEmail}
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
