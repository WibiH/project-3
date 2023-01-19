import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  console.log(event.picture);

  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md lg:max-w-md">
      <Link to={`/events/${event._id}`}>
        <img
          className="object-cover w-full h-48 rounded-tl-lg rounded-tr-lg"
          src={
            event.picture
              ? event.picture
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/250px-The_Event_2010_Intertitle.svg.png"
          }
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
