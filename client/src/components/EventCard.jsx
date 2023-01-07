import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const {
    id,
    eventNames,
    description,
    createdUser,
    picture,
    location,
    dateTime,
  } = event;

  return (
    <div key={id}>
      <Link to={`/events/${id}`}>
        <div>
          <h3>
            {eventNames} - {dateTime}
          </h3>
          <h6>{createdUser}</h6>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
