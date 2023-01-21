import React, { useMemo } from "react";
import { IKContext, IKUpload } from "imagekitio-react";
// import Select from "react-select";
// import countryList from "react-select-country-list";

const EventForm = ({ event, onEventChange, onEventSubmit }) => {
  const handleEventFormSubmission = (e) => {
    console.log(event);
    e.preventDefault();
    onEventSubmit();
  };

  // const options = useMemo(() => countryList().getData(), []);

  const onFileUploadError = (error) => {
    console.log("onFileUploadError", error);
  };

  const onFileUploadSuccess = (value) => {
    console.log("onFileUploadSuccess", value);
    const { url } = value;
    onEventChange({ ...event, picture: url });
  };

  return (
    <form onSubmit={handleEventFormSubmission} className="flex flex-col m-8">
      <label htmlFor="eventName" className="mt-4">
        Event Name
      </label>
      <input
        className="bg-white border rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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

      <label htmlFor="description" className="mt-4">
        Description
      </label>
      <textarea
        className="bg-white border rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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

      <label htmlFor="picture" className="mt-4">
        Event Picture
      </label>
      {/* <input id="picture" type="file" name="picture" /> */}

      {event.picture && (
        <img
          src={event.picture}
          alt={event.eventName}
          className="w-1/2 rounded-md mt-4"
        />
      )}

      <IKContext
        // Required for image displayed
        urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL}
        // Required for image upload
        publicKey={process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY}
        authenticationEndpoint={
          process.env.REACT_APP_API_BASE_URL +
          process.env.REACT_APP_AUTHENTICATION_ENDPOINT
        }
      >
        <IKUpload onError={onFileUploadError} onSuccess={onFileUploadSuccess} />
      </IKContext>

      {/* Wishlist: Use Google Map API */}
      <label htmlFor="location" className="mt-4">
        Location
      </label>
      <input
        className="bg-white border rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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

      <label htmlFor="dateTime" className="mt-4">
        Event Date and Time
      </label>
      <input
        className="bg-white border rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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
      <button
        className="btn-rainbow mx-auto;
   mx-auto"
      >
        Submit event
      </button>
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
