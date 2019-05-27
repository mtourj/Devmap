import React, { Component } from "react";
import "./App.css";
import Landing from './Landing/Landing';
import Devmap from "./Devmap/Devmap";

export default class App extends Component {
  state = {
    username: 'devmaps',
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

  render() {
    return (
      <div className="App">
        {/* TODO: Make landing page/map conditionally appear based on sign-in status */}
        {/* <Landing /> */}
        { this.state.username ?
        <Devmap /> :
        <Landing />
        }
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
