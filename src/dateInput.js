import React from "react";

export default class DateInput extends React.Component {
  sendData = event => {
    this.props.updateUserInput(event.target);
  };

  defaultDateValue = () => {
    let d = new Date();
    currentDate = d.toISOString().substr(0, 10);
    return currentDate;
  };

  componentDidMount() {
    this.defaultDateValue();
  }

  render() {
    return (
      <div className="user-input-container">
        <h3>Quarantine Start Date:</h3>
        <input
          className="user-input"
          name="date"
          type="date"
          onChange={this.sendData}
          // value={this.defaultDateValue()}
          value={this.props.date}
        />
      </div>
    );
  }
}
