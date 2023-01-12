import React from "react";
import { useState, useEffect } from "react";
import { attendanceLoadAll } from "../services/attendances";
import AttendanceList from "../components/AttendanceList";

const Profile = () => {
  const [attendances, setAttendances] = useState([]);
  useEffect(() => {
    attendanceLoadAll().then((data) => setAttendances(data.attendances));
  });

  return (
    <div>
      <AttendanceList attendances={attendances} />
    </div>
  );
};

export default Profile;
