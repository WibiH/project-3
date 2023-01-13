import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ events }) => {
  events.map((eachEvent) => {
    return (
      <div key={eachEvent._id}>
        <Link to={`/events/${eachEvent._id}`}>
          <h3>
            {eachEvent.eventName} - {eachEvent.dateTime}
          </h3>
          <h6>{eachEvent.createdUser.name}</h6>
        </Link>
      </div>
    );
  });
};

export default EventCard;
