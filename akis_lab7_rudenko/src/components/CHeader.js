import "./CHeader.css";
import React, { Component } from "react";
import logo from "../logo.svg";

class CHeader extends Component {
  render() {
    const { aName, aFamily } = this.props;
    return (
      <div className="headerContainer">
        <img src={logo} className="headerLogo" alt="logo" />
        <h2>Witaj w przykładowym serwisie {aName + " " + aFamily}</h2>
      </div>
    );
  }
}

export default CHeader;
