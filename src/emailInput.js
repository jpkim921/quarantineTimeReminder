import React from "react";

export default class EmailInput extends React.Component {
  sendData = event => {
    this.props.updateUserInput(event.target);
  };

  render() {
    return (
      <div className="user-input">
        <input
          className="email-input no-outline"
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
