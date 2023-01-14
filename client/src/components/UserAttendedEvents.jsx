import React from "react";
import { Link } from "react-router-dom";
import AttendanceButton from "../components/AttendanceButton";
import EventCard from "./EventCard";

const UserAttendedEvents = ({ attendances }) => {
  return (
    //Here could be the Event-component (EventList line9-16)
    <div>
      {attendances.map((eachEvent) => {
        return (
          <div>
            <EventCard />
            <AttendanceButton />
          </div>
        );
      })}
    </div>
  );
};

export default UserAttendedEvents;
