import React, { Component } from "react";
import CInner from "./CInner";
import "./COuter.css";
import styl from "./COuter.module.css";

export default class COuter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      st: "Poczatek",
    };
    console.log("COuter - konstruktor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("COuter - getDerivedStateFromProps()");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("Couter render");
    return (
      <div className="bgClassNormal">
        <h2 className={styl.bgClassModule}>Komponent zewnentrzne</h2>
        <button onClick={this.stateChange}>Zniana stanu</button>
        <CInner />
      </div>
    );
  }

  stateChange = () => {
    this.setState({ st: "Klick" });
  };

  shouldComponentUpdate() {
    console.log("COuter - shouldComponentUpdate()");
    return true;
  }

  getSnapshotBeforeUpdate(pprops, pstate) {
    console.log("COuter - getSnapshotBeforeUpdate()");
    return null;
  }

  componentDidUpdate() {
    console.log("COuter - componentDidUpdate()");
  }
}
