import React from "react";
import { useState, useEffect } from "react";
import { attendanceLoadAll } from "../services/attendances";
import UserAttendedEvents from "../components/UserAttendedEvents";

const Profile = () => {
  const [attendances, setAttendances] = useState([]);
  useEffect(() => {
    attendanceLoadAll().then((data) => setAttendances(data.attendances));
  });

  return (
    <div>
      <UserAttendedEvents attendances={attendances} />
    </div>
  );
};

export default Profile;
