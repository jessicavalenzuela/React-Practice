import React from "react";
import ReactDom from "react-dom";
// import "./index.css";

function Person() {
  const btn = "search button";
  const name = "Jessica";
  const lastName = "Valenzuela";
  return (
    <section>
      <button>{btn}</button>
      <h2>{name + " " + lastName}</h2>
      <p> info</p>
    </section>
  );
}

ReactDom.render(<Person />, document.getElementById("root"));
