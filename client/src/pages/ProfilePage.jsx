import React from "react";
import { useState, useEffect } from "react";
import { attendanceLoadAll } from "../services/attendances";
import UserAttendedEvents from "../components/UserAttendedEvents";
import ProfileComponent from "../components/ProfileComponent";

const Profile = () => {
  const [attendances, setAttendances] = useState([]);
  useEffect(() => {
    attendanceLoadAll().then((data) => setAttendances(data.attendances));
  });
  return (
    <div>
      {/* <ProfileComponent /> */}
      <h1>Your favorite events</h1>
      <UserAttendedEvents attendances={attendances} />
    </div>
  );
};

export default Profile;
