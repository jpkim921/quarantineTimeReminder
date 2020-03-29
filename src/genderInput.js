import React from "react";

export default class GenderInput extends React.Component {
  sendData = event => {
    this.props.updateUserEmail(event.target.value);
  };

  render() {
    return (
      <div className="user-input">
        <div className="button-holder">
          <button className="gender-button">Male</button>
          <button className="gender-button">FeMale</button>
        </div>
      </div>
    );
  }
}
