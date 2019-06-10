import React, { Component } from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import Devmap from "./Devmap/Devmap";
import Navbar from "./Navbar/Navbar";
import Sidebar from './Sidebar/Sidebar';

export default class App extends Component {
  state = {
    username: "devmap",
    maps: [
      {
        name: "devmap1",
        author: "devmaps"
      },
      {
        name: "devmap2",
        author: "mohammadtourj"
      }
    ]
  };

  login = (user, pass) => {
    // Perform authentication

    // TODO

    // FOR NOW, WE JUST CHECK TO SEE IF THEY MATCH 'devmap'
    if (user === "devmap" && pass === "devmap") {
      console.log("success");
      this.setState({ username: "devmap" });
    }
  };

  render() {
    return (
      <div className="App">
        {/* TODO: Make landing page/map conditionally appear based on sign-in status */}
        {/* <Landing /> */}
        {this.state.username ? (
          <div>
            <div className="rows">
              <Navbar />
              <div className="cols">
                <Sidebar  maps={this.state.maps} />
                <Devmap />
              </div>
            </div>
          </div>
        ) : (
          <Landing login={this.login} />
        )}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}
