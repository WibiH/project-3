import React from "react";
import { eventLoadAll } from "../services/event";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventLoadAll().then((data) => setEvents(data.events));
  }, []);

  return (
    <div>
      HomePage
      {events.map((event, index) => {
        return (
          <div key={index}>
            <EventCard event={event} />
          </div>
        );
      })}
      {/* {event && event.length >= 3 ? (
        <div>
          <EventCard event={event} /> <EventCard event={event} />
          <EventCard event={event} />
        </div>
      ) : (
        <EventCard event={event} />
      )} */}
    </div>
  );
};

export default HomePage;
