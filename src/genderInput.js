import React from "react";

export default class GenderInput extends React.Component {
  sendData = event => {
    this.props.updateUserEmail(event.target.value);
  };

  render() {
    return (
      <div className="user-input">
        <div className="button-holder">
          <button className="gender-button">
            <i class="fas fa-male" /> Male
          </button>
          <button className="gender-button">
            <i class="fas fa-female" /> FeMale
          </button>
        </div>
      </div>
    );
  }
}
