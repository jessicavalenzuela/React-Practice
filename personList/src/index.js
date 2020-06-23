import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://i.pinimg.com/564x/0c/91/f8/0c91f87c012b7ebef6988ea4ac961f89.jpg`;
  return (
    <article className="person">
      <img src={img} alt="person" height="100" width="100" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};
const PersonList = () => {
  return (
    <section className="person-list">
      <Person
        img="https://i.pinimg.com/564x/0c/91/f8/0c91f87c012b7ebef6988ea4ac961f89.jpg"
        name="Deku"
        job="Student"
      >
        <p>Enrolled in the hero course at UA highschool.</p>
      </Person>
      <Person
        img="https://cdn.shopify.com/s/files/1/1888/7379/files/45SUuxh3_400x400_36722686-9da4-4cf0-8668-648a2a270ab8.jpg?v=1571937384"
        name="Eraserhead"
        job="Teacher"
      >
        <p>Teacher for the hero course at UA highschool.</p>
      </Person>
      <Person
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB2zGQzLnc7YhLcirYvkFWsYg4v5vM8fg1VTLcV-Z9dz7V_dX6&usqp=CAU"
        name="All Might"
        job="Hero"
      >
        <p>#1 Hero.</p>
      </Person>
    </section>
  );
};

ReactDom.render(<PersonList />, document.getElementById("root"));
