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
    <div className="flex flex-col justify-center">
      <img
        className="object-cover h-20 mx-auto "
        src="https://www.queerhistory.de/wp-content/uploads/2021/07/qhm-logo.png"
        alt="Queer History Month logo"
      />
      <div className="w-2/3 h-72 mx-auto ">
        <h1>Some type of images</h1>
      </div>
      <div className="w-2/3 h-72 mx-auto">
        <h1>About us</h1>
        <p>
          Queer History Month is a collaborative project that aims to promote
          the treatment of historical as well as contemporary queer issues in
          education. On the trail of queer stories and people in Berlin.
        </p>
      </div>
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
    </div>
  );
};

export default HomePage;
