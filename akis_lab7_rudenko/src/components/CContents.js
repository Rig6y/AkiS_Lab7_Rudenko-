import React, { Component } from "react";
import jsonData from "../res/text.json";
import "./CContents.css";

class CContents extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Witaj użytkkowniku. Kliknij przycisk aby poznać wiadomość",
    };
    // this.txtData = () => JSON.parse(JSON.stringify(jsonData));
    // const imgContext = require.context(`../res/`, false, /\.jpeg$/);
    // let img = {};

    // this.imgs = imgContext.keys().reduce((icons, file) => {
    //   const cname = imgContext(file).default;
    //   const label = file.slice(2, -4);
    //   img[label] = cname;
    //   return img;
    // }, {});
  }

  changeMsg = () => {
    this.setState({
      msg: "Właśnie jesteś uczestnikiem kursu React, gratulacje !",
    });
    console.log("Przycisl zostal nacisniety");
  };

  render() {
    // const tabData = this.txtData().data;
    const data = JSON.parse(JSON.stringify(jsonData));
    const items = data.map((item) => (
      <div key={item.id} id={`"div${item.id}`} className="contentsFlex">
        <img src={item.img} alt="" className="contentsFlexImg" />
        <p className="contentsFlexTxt">{item.text}</p>
      </div>
    ));

    return (
      <div>
        <h1>{this.state.msg}</h1>
        {items}
        <button onClick={this.changeMsg}>Kliknij, aby poznać tajemnicę</button>
      </div>
    );
  }
}
export default CContents;
