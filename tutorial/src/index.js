import React from "react";
import ReactDom from "react-dom";

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
function Greeting() {
  return (
    <>
      <section>
        <Person />
        <Message />
      </section>
    </>
  );
}
const Person = () => <h2>Hello World</h2>;
const Message = () => <p>It's me Jessica.</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));
