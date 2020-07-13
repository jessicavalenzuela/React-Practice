import React from "react";
import Room from "./rooms";

export default function roomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3> unfortunately no rooms matched your search</h3>
      </div>
    );
  }
  return (
    <section className="roomsList">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
