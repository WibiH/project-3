import React from "react";
import { Link } from "react-router-dom";

const AttendanceButton = ({ attendance }) => {
  return (
    <div>
      {" "}
      <button>Delete attendance</button>
    </div>
  );
};

export default AttendanceButton;

/*
 <Link to={`/events/${id}/attend`}>
        <button>Delete attendance</button>
      </Link>
      */
