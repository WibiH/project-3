import React from "react";
import EventCard from "./EventCard";

const UserAttendedEvents = ({ attendances }) => {
  return (
    <div className="flex gap-4 flex-wrap p-5 justify-center">
      {attendances.length &&
        attendances.map((attendance) => {
          return (
            attendance && (
              <div className=" flex-row">
                <EventCard
                  key={attendance._id}
                  event={attendance.attendingEvent}
                />
              </div>
            )
          );
        })}
    </div>
  );
};

export default UserAttendedEvents;
