import React from "react";

const EventForm = ({ event, onEventChange, onEventSubmit }) => {
  const handleEventFormSubmission = (event) => {
    event.preventDefault();
    onEventSubmit();
  };

  return (
    <form onSubmit={handleEventFormSubmission} className="flex flex-col">
      <label htmlFor="eventNames">Event Name</label>
      <input
        type="text"
        name="eventNames"
        id="eventNames"
        onChange={(event) =>
          onEventChange({
            ...event,
            eventNames: event.target.value,
          })
        }
        value={event.eventNames}
      />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        onChange={(event) =>
          onEventChange({
            ...event,
            description: event.target.value,
          })
        }
        value={event.description}
      ></textarea>

      <label htmlFor="picture">Event Picture</label>
      <input id="picture" type="file" name="picture" />

      {/* Wishlist: Use Google Map API */}
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        onChange={(event) =>
          onEventChange({
            ...event,
            location: event.target.value,
          })
        }
        value={event.location}
      />

      <label htmlFor="dateTime">Event Date and Time</label>
      <input
        type="datetime-local"
        name="dateTime"
        id="dateTime"
        onChange={(event) =>
          onEventChange({
            ...event,
            dateTime: event.target.value,
          })
        }
        value={event.dateTime}
      />

      <button className="btn-primary">Submit quote</button>
    </form>
  );
};

export default EventForm;

// eventNames
// description
// createdUser
// picture
// location
// dateTime
