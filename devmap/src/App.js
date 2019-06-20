import React from "react";
import "./App.css";
import Devmap from "./Devmap/Devmap";
import Navbar from "./Navbar/Navbar";

import withAuth from "./withAuth/WithAuth";
import Landing from './Landing/Landing';

import { connect } from "react-redux";

import { Route } from "react-router-dom";

import * as actions from "./actions";

const mapStateToProps = state => {
  return {
    token: state.token,
    maps: state.maps,
    currentMap: state.currentMap
  };
};

const App = props => {
  const login = (user, pass) => {
    // Perform authentication

    // TODO

    // FOR NOW, WE JUST CHECK TO SEE IF THEY MATCH 'devmap'
    if (user === "devmap" && pass === "devmap") {
      console.log("success");
      // setState({ username: "devmap" });
      props.login(user, pass);
    }
  };

  const app = (
      <div className="App">
        <div>
          <div className="rows">
            <Navbar />
            <Route exact path='/' component={Landing} />
            <Route path='/maps' render={routeProps => withAuth({...props, login: login})(<Devmap {...routeProps} maps={props.maps} />)} />
          </div>
        </div>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
      </div>
  );

  return app;
  // return withAuth({ ...props, login: login })(app);
};

export default connect(
  mapStateToProps,
  { login: actions.login }
)(App);
