import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eventAdd } from "../services/event";
import EventForm from "../components/EventForm";
import { useAuthContext } from "../context/authentication";

const EventCreatePage = ({ user }) => {
  const initialEvent = {
    eventName: "",
    description: "",
    createdUser: "",
    // createdUser: { user },
    picture: null,
    location: "",
    dateTime: "",
  };
  const [eventData, setEvent] = useState(initialEvent);

  const navigate = useNavigate();

  const { authToken } = useAuthContext();

  const handleEventCreation = () => {
    eventAdd(eventData, authToken).then((data) => {
      const id = data.event._id;
      navigate(`/events/${id}`);
    });
  };

  return (
    <div className="p-5">
      <EventForm
        event={eventData}
        onEventChange={setEvent}
        onEventSubmit={handleEventCreation}
      />
    </div>
  );
};

export default EventCreatePage;
