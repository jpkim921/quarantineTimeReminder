import React from "react";
import EmailInput from "./emailInput";

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
      <div>
        <h1>InputContainer</h1>
        <EmailInput
          updateUserEmail={this.updateUserEmail}
          email={this.state.email}
        />
        <p>--|{this.state.email}|--</p>
        <p>--|{this.state.gender}|--</p>
        <p>--|{this.state.dob_age}|--</p>
        <p>--|{this.state.date}|--</p>
      </div>
    );
  }
}
