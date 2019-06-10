import React from "react";
import Form from "../Form/Form";
import "./Landing.scss";
import background from "../img/devmapLogoLarge.png";

export default class Landing extends React.Component {
  state = {
    loginName: "",
    loginPass: ""
  };

  onUpdateLoginName = async event => {
    await this.setState({ loginName: event.target.value });
  };

  onUpdatePassword = async event => {
    await this.setState({ loginPass: event.target.value });
  };

  onSubmit = async event => {
    // Attemp login with given creds
    event.preventDefault();
    await this.props.login(this.state.loginName, this.state.loginPass);
  };

  loginForm = [
    {
      label: "Username",
      change: this.onUpdateLoginName,
      val: this.state.loginName
    },
    {
      label: "Password",
      change: this.onUpdatePassword,
      val: this.state.loginPass
    }
  ];

  render() {
    return (
      <div className="landing">
        <div className="content">
          <div className="intro">
            <h1>
              Welcome to Devmap<span className="beta">BETA</span>!
            </h1>
            <p>
              Devmap is a developer tool allowing you, as a developer to lay out
              the architecture of your app before building it. Engineering your
              project before building it only makes sense, doesn't it? Aren't we
              Software <span className="italic">Engineers</span> afterall? Login
              below to begin right away!
            </p>
            <p className="beta">
              Note: For this beta, just login with username{" "}
              <span className="no-italic black">devmap</span> and password{" "}
              <span className="no-italic black">devmap</span>.
            </p>
          </div>
          <Form data={this.loginForm} submit={this.onSubmit} />
          <div className="footer">
            <p>
              Don't have an account? <a href="#">Create one here</a>
            </p>
            <div className="row">
              <span>
                <a href="#">About</a> | <a href="#">GitHub</a> |{" "}
                <a href="#">Contact</a>
              </span>
            </div>
            <span className="foot-text">Do no redistribute</span>
          </div>
        </div>
        <img className="bg-img" src={background} alt="" />
      </div>
    );
  }
}
