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
        className="object-cover h-20 mx-auto my-9"
        src="https://www.queerhistory.de/wp-content/uploads/2021/07/qhm-logo.png"
        alt="Queer History Month logo"
      />

      <img
        className="object-cover w-2/3 h-72 mx-auto mb-9 rounded-lg"
        src="https://www.queerhistory.de/wp-content/uploads/2021/09/Gruppenfoto-1.jpg"
        alt="Queer History Month"
      />

      <div className="w-2/3 max-h-64 m-auto">
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          About us
        </h1>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
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
