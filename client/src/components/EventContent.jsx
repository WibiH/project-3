import React from "react";

const EventContent = ({ event }) => {
  const { eventNames, description, createdUser, picture, location, dateTime } =
    event;
  return (
    <div className="p-8 m-8">
      {picture && <img src={picture} alt={eventNames} />}
      <h1>{eventNames}</h1>
      <h3>
        {location} {dateTime}
      </h3>
      <h5>{createdUser}</h5>
      <p>{description}</p>
    </div>
  );
};

export default EventContent;
