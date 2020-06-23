import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//stateless functional component

//always return JSX ( a syntax in react similar to html)
//JSX RULES:
//return single element
//div / section /article
//use camelCase for html attribute
//className instead of class
//close every element
//formating

//function name has to be captilized
function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <section className="book">
      <CoverImage />
      <Title />
      <Author />
    </section>
  );
};

const CoverImage = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51JM3rldZCL._AC_SX184_.jpg"
    alt="how to be an antiracist"
  />
);
const Title = () => <h1>How to be antiracist</h1>;

const authorStyle = {
  letterSpacing: "3px",
  color: "grey",
};

const Author = () => <p style={authorStyle}>by Ibram X. Kendi</p>;

ReactDom.render(<Books />, document.getElementById("root"));
