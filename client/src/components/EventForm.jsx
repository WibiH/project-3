import React, { useMemo } from "react";
// import Select from "react-select";
// import countryList from "react-select-country-list";

const EventForm = ({ event, onEventChange, onEventSubmit }) => {
  const handleEventFormSubmission = (e) => {
    e.preventDefault();
    onEventSubmit();
  };

  // const options = useMemo(() => countryList().getData(), []);

  return (
    <form onSubmit={handleEventFormSubmission} className="flex flex-col">
      <label htmlFor="eventName">Event Name</label>
      <input
        type="text"
        name="eventName"
        id="eventName"
        onChange={(e) =>
          onEventChange({
            ...event,
            eventName: e.target.value,
          })
        }
        value={event.eventName}
      />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        onChange={(e) =>
          onEventChange({
            ...event,
            description: e.target.value,
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
        onChange={(e) =>
          onEventChange({
            ...event,
            location: e.target.value,
          })
        }
        value={event.location}
      />

      {/* <Select
        options={options}
        name="location"
        id="location"
        value={event.location}
        onChange={(e) =>
          onEventChange({
            ...event,
            location: e.target.value,
          })
        }
      /> */}

      <label htmlFor="dateTime">Event Date and Time</label>
      <input
        type="datetime-local"
        name="dateTime"
        id="dateTime"
        onChange={(e) =>
          onEventChange({
            ...event,
            dateTime: e.target.value,
          })
        }
        value={event.dateTime}
      />

      <button className="btn-primary">Create event</button>
    </form>
  );
};

export default EventForm;

// eventName
// description
// createdUser
// picture
// location
// dateTime
