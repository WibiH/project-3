import React from "react";
import { useState, useEffect } from "react";
import { eventLoadAll } from "../services/event";
import EventList from "../components/EventList";

const EventDisplayAllPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventLoadAll().then((data) => setEvents(data.events));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Event List
      </h1>
      {events.length && <EventList events={events} />}
    </div>
  );
};

export default EventDisplayAllPage;
