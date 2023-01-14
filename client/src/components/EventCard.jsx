import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="p-5">
      <Link to={`/events/${event._id}`}>
        <h1>{event.eventName}</h1>
        <h3>
          {event.dateTime.split("T")[0].toString()} -{" "}
          {event.dateTime.split("T")[1].split(":", 2).join(":")}
        </h3>
        <h6>{event.createdUser.name}</h6>
      </Link>
    </div>
  );
};

export default EventCard;
