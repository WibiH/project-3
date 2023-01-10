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
    <div>
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
          <button className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Delete
          </button>
        </form>
      )}
    </div>
  );
};

export default EventEditDeletePage;
