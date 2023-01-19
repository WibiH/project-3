import React, { useState } from "react";
import { attendanceAdd, attendanceDelete } from "../services/attendances";
import { useAuthContext } from "../context/authentication";
import { useAttendanceContext } from "../context/attendances";

const AttendanceButton = ({ event }) => {
  const { attendances, setAttendances } = useAttendanceContext();
  const isAttending = attendances.some(
    (eachAttendance) => event._id === eachAttendance.attendingEvent._id
  );

  const { authToken, user } = useAuthContext();

  const handleClick = () => {
    const reqBody = { attendingUser: user._id, attendingEvent: event._id };
    if (isAttending) {
      console.log("This is Button-Authtoken", authToken);
      attendanceDelete(event._id, authToken);
    } else {
      console.log("This is the attendance-button authToken", authToken);
      attendanceAdd(event._id, reqBody, authToken);
    }
  };

  return (
    <div className="btn-primary">
      <button onClick={handleClick}>
        {" "}
        {(isAttending && <p>You are attending</p>) || (
          <p>You are not attending</p>
        )}
      </button>
    </div>
  );
};

export default AttendanceButton;
