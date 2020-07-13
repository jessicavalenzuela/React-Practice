import React, { Component } from "react";
import Title from "./title";
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking } from "react-icons/fa";

export default class services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Come join us for our Happy Hour (5:00pm - 8:00pm). We offer free cocktail service! ",
      },
      {
        icon: <FaHiking />,
        title: "Hiking Trails",
        info: "Enjoy nature with our numerous nearby trails. ",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "We offer free shuttle services to areas near our location",
      },
      {
        icon: <FaBeer />,
        title: "tasty beer",
        info: "Try out our finest beer. You won't regret it.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
