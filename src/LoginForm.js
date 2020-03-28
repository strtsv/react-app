import React, { Component } from "react";
import api from "./services/api";

const BgComponent = {
  width: "480px",
  margin: "30px auto",
  display: `flex`,
  flexFlow: `row nowrap`,
  alignItems: `center`,
  padding: `0.2em 0.4em`,
  backgroundColor: `rgba(0, 0, 0, 0.2)`,
  boxShadow: `inset 2px 1.5px 4px rgba(0, 0, 0, 0.2)`,
  color: "rgb(104, 104, 104)",
  fontsize: "15px",
  borderRadius: "6px",
  minHeight: "100px",
  boxSizing: "border-box"
};

const ButtonComponent = {
  fontFamily: "brandon-grotesque, sans-serif",
  fontSize: "12px",
  letterSpacing: "0.1em",
  fontWeight: "700",
  textTransform: "uppercase",
  boxSizing: "border-box",
  borderRadius: "4px",
  backgroundColor: "#000000",
  border: 0,
  color: "#fff",
  transition: "background 250ms",
  padding: "4px",
  cursor: "pointer",
  flost: "right"
};

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: false };
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleClick(event) {
    event.preventDefault();
    const { email, password } = this.state;
    api()
      .post("/auth/login", { email, password })
      .then(data => {
        console.log(data);
      })(email, password)
      .then(ok => {
        if (ok) {
          this.props.onLogin();
        } else {
          this.setState({ error: true });
        }
      });
  }
  render() {
    const { email, password, error } = this.state;
    return (
      <form>
        <div style={BgComponent}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <div className="field">
            <p className="help is-danger">{error && "Invalid credentials"}</p>
            <div className="control">
              <button
                style={ButtonComponent}
                onClick={this.handleClick.bind(this)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
