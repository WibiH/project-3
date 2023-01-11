import React from "react";
import { useState, useEffect } from "react";
import { eventLoadAll } from "../services/event";
import EventList from "../components/EventList";

const EventDisplayAllPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    eventLoadAll().then((data) => setEvents(data.events));
  });

  // {data: events: [{message: '', author, ''}, ...]}
  return (
    <div>
      <h1>Event List</h1>
      <EventList events={events} />
    </div>
  );
};

export default EventDisplayAllPage;
