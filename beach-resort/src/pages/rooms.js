import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/roomsContainer";

export default function rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}
