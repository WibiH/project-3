import React, { useState } from "react";
import { attendanceAdd } from "../services/attendances";
import { useAuthContext } from "../context/authentication";

const AttendanceButton = ({ event }) => {
  const [attendance, setAttendance] = useState(true);

  const toogleAttendance = () => {
    setAttendance(!attendance);
  };

  const { authToken } = useAuthContext();

  const handleClick = () => {
    const reqBody = event;
    toogleAttendance();
    attendanceAdd(event._id, reqBody, authToken);
  };

  return (
    <div className="btn-primary">
      <button onClick={handleClick}>
        {" "}
        {(attendance && <p>You are attending</p>) || (
          <p>You are not attending</p>
        )}
      </button>
    </div>
  );
};

export default AttendanceButton;
