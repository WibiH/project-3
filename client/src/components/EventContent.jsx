import React from "react";

const EventContent = ({ event }) => {
  // const { eventName, description, createdUser, picture, location, dateTime } =
  //   event;
  return (
    <div>
      {event && (
        <div className="p-8 m-8">
          {event.picture && <img src={event.picture} alt={event.eventName} />}
          <h1>{event.eventName}</h1>
          <h3>
            {event.location} {event.dateTime}
          </h3>
          <h5>{event.createdUser}</h5>
          <p>{event.description}</p>
        </div>
      )}
    </div>
  );
};

export default EventContent;
