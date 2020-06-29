import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img className="img" src={img} alt="image of the city tour" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <img
              src="https://cdn.onlinewebfonts.com/svg/img_20085.png"
              alt="image of btn"
              width="20px"
              height="20px"
            />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <img
                className="btn"
                src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/Dropdown_1-512.png"
                alt="dropdown"
                width="15px"
                height="15px"
              />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
