import React from "react";

export default class GenderInput extends React.Component {
  handleClick = event => {
    event.preventDefault();
    this.props.updateUserInput(event.target);
  };

  render() {
    return (
      <div className="user-input-container">
        <div className="button-holder">
          <button
            className="gender-button"
            onClick={this.handleClick}
            name="gender"
            value="male"
          >
            <i className="fas fa-male fa-3x" />
            <p>Male</p>
          </button>
          <button
            className="gender-button"
            onClick={this.handleClick}
            name="gender"
            value="female"
          >
            <i className="fas fa-female fa-3x" />
            <p>Female</p>
          </button>
        </div>
      </div>
    );
  }
}
