import React, { Component } from "react";

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("form is submitted. Email value is", this.state.email);
  }

  handleEmailChange(event) {
    console.log("email was changed", event.target.value);
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <input type="text" name="login" placeholder="username"/>
        <input type="password" name="password" placeholder="password"/>
        <input className="login-btn" type="submit" value="Login"/>
      </form>
    );
  }
}
