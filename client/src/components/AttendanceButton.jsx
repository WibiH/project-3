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
    <div>
      <button
        onClick={handleClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        {" "}
        {(isAttending && (
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            You are attending
          </span>
        )) || (
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            You are not attending
          </span>
        )}
      </button>
    </div>
  );
};

export default AttendanceButton;
