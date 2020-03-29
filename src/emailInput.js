import React from "react";

export default class EmailInput extends React.Component {
  sendData = event => {
    this.props.updateUserEmail(event.target.value);
  };

  render() {
    return (
      <div>
        <h1>EmailInput</h1>
        <form>
          <label>
            Email:
            <input
              class="userInput"
              name="email"
              type="text"
              placeholder="Email:"
              onChange={this.sendData}
              value={this.props.email}
            />
          </label>
        </form>
      </div>
    );
  }
}
