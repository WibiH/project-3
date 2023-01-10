import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eventAdd } from "../services/event";
import EventForm from "../components/EventForm";
import { useAuthContext } from "../context/authentication";

const EventCreatePage = () => {
  const initialEvent = {
    eventNames: "",
    description: "",
    createdUser: "",
    picture: null,
    location: "",
    dateTime: "",
  };
  const [event, setEvent] = useState(initialEvent);

  const navigate = useNavigate();

  const { authToken } = useAuthContext();

  const handleEventCreation = () => {
    eventAdd(event, authToken).then((data) => {
      const id = data.event._id;
      navigate(`/events/${id}`);
    });
  };

  return (
    <div>
      <EventForm
        event={event}
        onEventChange={setEvent}
        onEventSubmit={handleEventCreation}
      />
    </div>
  );
};

export default EventCreatePage;
