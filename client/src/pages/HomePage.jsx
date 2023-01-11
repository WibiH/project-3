import React from "react";
import { eventLoadRandom } from "../services/event";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const HomePage = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    eventLoadRandom().then((data) => setEvent(data.event));
  }, []);

  return (
    <div>
      HomePage
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
