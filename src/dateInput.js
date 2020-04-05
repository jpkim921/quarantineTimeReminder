import React from "react";

export default class DateInput extends React.Component {
  constructor(props) {
    super(props);
    let d = new Date();
    let currentDate = d.toISOString().substr(0, 10);

    this.state = {
      date: currentDate
    };
    console.log("dateinput constructor: ", currentDate);
  }

  sendData = event => {
    // this.setState({
    //   [event.target.name]: event.target.value
    // });
    console.log(event.target.name);
    this.props.updateUserInput(event.target);
  };

  // defaultDateValue = () => {
  //   let d = new Date();
  //   currentDate = d.toISOString().substr(0, 10);
  //   return currentDate;
  // };

  render() {
    return (
      <div className="user-input-container">
        <h3>Quarantine Start Date:</h3>
        <input
          className="user-input"
          name="date"
          type="date"
          onChange={this.sendData}
          defaultValue={this.state.date}
          // value={this.props.date}
        />
      </div>
    );
  }
}
