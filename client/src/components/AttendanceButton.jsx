import React from "react";
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
    <div className="inline-block px-4 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out md:px-7">
      <button onClick={handleClick}>
        {" "}
        {(isAttending && <p>You are attending</p>) || <p>Not attending</p>}
      </button>
    </div>
  );
};

export default AttendanceButton;
