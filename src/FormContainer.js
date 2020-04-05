import React from "react";
import { createICSFile } from "./icsScripts";
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

  updateInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    createICSFile(this.state);
  };

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
              onChange={this.updateInput}
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
              onChange={this.updateInput}
            />
          </div>
          <button onClick={this.handleClick}>Create ICS</button>
        </form>
        <p>__{this.state.email}__</p>
        <p>__{this.state.date.split("-")}__</p>
      </div>
    );
  }
}
