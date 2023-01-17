import React from "react";
import EventContent from "./EventContent";

const UserAttendedEvents = ({ attendances }) => {
  return (
    <div>
      {attendances.length &&
        attendances.map((attendance) => {
          return (
            attendance && (
              <EventContent
                key={attendance._id}
                event={attendance.attendingEvent}
              />
            )
          );
        })}
    </div>
  );
};

export default UserAttendedEvents;
