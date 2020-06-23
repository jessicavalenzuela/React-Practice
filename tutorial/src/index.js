import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <h1>Hi I'm Jessica and this my first react component!</h1>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
