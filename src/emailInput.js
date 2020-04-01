import React from "react";

export default class EmailInput extends React.Component {
  sendData = event => {
    this.props.updateUserInput(event.target);
  };

  render() {
    return (
      <div className="user-input-container">
        <h3>Enter email where the Calendar file will be sent:</h3>
        <input
          className="user-input"
          name="email"
          type="text"
          placeholder="Email:"
          onChange={this.sendData}
          value={this.props.email}
        />
      </div>
    );
  }
}
