import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md lg:max-w-md">
      <Link to={`/events/${event._id}`}>
        <img
          className="object-cover w-full h-48 rounded-tl-lg rounded-tr-lg"
          src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
          alt={event.eventName}
        />
        <div className="px-6 py-4">
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-900">
            {event.eventName}
          </h4>
          <p className="mb-2 leading-normal text-gray-700">
            {event.dateTime.split("T")[0].toString()} -{" "}
            {event.dateTime.split("T")[1].split(":", 2).join(":")}
          </p>
          <p className="mb-3 font-normal text-gray-700">
            {event.createdUser.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
