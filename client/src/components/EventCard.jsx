import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  console.log(event.picture);

  return (
    <div className="w-72 border border-gray-200 rounded-lg shadow-md lg:max-w-md">
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
          <h4 className="mb-2 text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {event.eventName}
          </h4>
          <p className="mb-1 leading-normal text-gray-700 font-semibold">
            {event.dateTime.split("T")[0].toString()}
            <br />
            {event.dateTime.split("T")[1].split(":", 2).join(":")}
          </p>
          <p className="mb-2 font-normal text-gray-500">
            {event.createdUser.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
