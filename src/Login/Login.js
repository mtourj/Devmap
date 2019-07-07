import React from "react";
import Form from "../Form/Form";
import "./Login.scss";
import background from "../img/devmapLogoLarge.png";

import { connect } from 'react-redux';

import { Link } from "react-router-dom";

const Login = props => {

  if(props.token) {
    props.history.push('/maps');
  }

  const myState = {
    loginName: "",
    loginPass: ""
  };

  const onUpdateLoginName = event => {
    myState.loginName = event.target.value;
  };

  const onUpdatePassword = async event => {
    myState.loginPass = event.target.value;
  };

  const onSubmit = event => {
    // Attemp login with given creds
    event.preventDefault();
    props.login(myState.loginName, myState.loginPass);
  };

  const loginForm = [
    {
      label: "Username",
      change: onUpdateLoginName,
      val: myState.loginName
    },
    {
      label: "Password",
      change: onUpdatePassword,
      val: myState.loginPass
    }
  ];

  return (
    <div className="login">
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
            Note: For beta, just login with username{" "}
            <span className="no-italic black">devmap</span> and password{" "}
            <span className="no-italic black">devmap</span>.
          </p>
        </div>
        <Form data={loginForm} submit={onSubmit} />
        <div className="footer">
          <p>
            Don't have an account? <Link to="">Create one here</Link>
          </p>
          <div className="row">
            <span>
              <Link to="">About</Link> | <Link to="">GitHub</Link> |{" "}
              <Link to="">Contact</Link>
            </span>
          </div>
          <span className="foot-text">Do no redistribute</span>
        </div>
      </div>
      <img className="bg-img" src={background} alt="" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps, {})(Login);
