import React from "react";
import { Link } from "react-router-dom";

const AttendanceList = ({ attendances }) => {
  return (
    //Here could be the Event-component (EventList line9-16)
    <div>
      {attendances.map((eachEvent) => {
        return (
          <div key={eachEvent._id}>
            <Link to={`/events/${eachEvent._id}`}>
              <h3>
                {eachEvent.eventNames} - {eachEvent.dateTime}
              </h3>
              <h6>{eachEvent.createdUser}</h6>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AttendanceList;
