import React from "react";

import "./styles/inputStyle.css";

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    let d = new Date();
    let currentDate = d.toISOString().substr(0, 10);

    this.state = {
      email: "",
      date: currentDate
    };
  }
  render() {
    return (
      <div className="container">
        <h3>FormContainer</h3>
        <form className="user-form">
          <div className="user-input-container">
            <label>Email Address:</label>
            <input
              className="user-input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email: "
            />
          </div>
          <div className="user-input-container">
            <label>Quarantine Start Date:</label>
            <input
              className="user-input"
              name="date"
              type="date"
              onChange={this.sendData}
              defaultValue={this.state.date}
              // value={this.props.date}
            />
          </div>
        </form>
      </div>
    );
  }
}
