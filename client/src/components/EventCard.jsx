import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div>
      <Link to={`/events/${event._id}`}>
        <h3>
          {event.eventName} - {event.dateTime}
        </h3>
        <h6>{event.createdUser.name}</h6>
      </Link>
    </div>
  );
};

export default EventCard;
