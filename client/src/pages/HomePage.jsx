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
    <div className="flex gap-4 flex-wrap p-5 justify-center">
      {events.map((event, index) => {
        return (
          <div key={index} className=" flex-row">
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
