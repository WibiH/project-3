import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md lg:max-w-md">
      <Link to={`/events/${event._id}`}>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {event.eventName}
        </h2>
        <p className="mb-3 font-normal text-gray-700">
          {event.dateTime.split("T")[0].toString()} -{" "}
          {event.dateTime.split("T")[1].split(":", 2).join(":")}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          {event.createdUser.name}
        </p>
      </Link>
    </div>
  );
};

export default EventCard;
