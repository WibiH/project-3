import React from "react";
import EventContent from "./EventContent";

const UserAttendedEvents = ({ attendances }) => {
  return (
    <div>
      {attendances.length && <EventContent attendances={attendances} />}
    </div>
  );
};

export default UserAttendedEvents;

/*
 <div>
      {attendances.map((eachEvent) => {
        return (
          <div>
            <EventContent />
          </div>
        );
      })}
    </div>
    */
