import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authentication";
import EventForm from "../components/EventForm";
import { eventEdit, eventDelete, eventLoadSingle } from "../services/event";

const EventEditDeletePage = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { authToken } = useAuthContext();

  const handleEventEdit = () => {
    eventEdit(id, event, authToken).then(() => navigate(`/events/${id}`));
  };

  const handleEventDeleteFormSubmission = (event) => {
    event.preventDefault();
    eventDelete(id, authToken).then(() => navigate("/events"));
  };

  useEffect(() => {
    eventLoadSingle(id).then((data) => setEvent(data.event));
  }, [id]);

  return (
    <div className="p-5">
      <h1>Edit event</h1>
      {event && (
        <EventForm
          event={event}
          onEventChange={setEvent}
          onEventSubmit={handleEventEdit}
        />
      )}
      {event && (
        <form onSubmit={handleEventDeleteFormSubmission}>
          <button className="btn-primary">Delete</button>
        </form>
      )}
    </div>
  );
};

export default EventEditDeletePage;
