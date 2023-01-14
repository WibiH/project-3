import React from "react";
import { useState, useEffect } from "react";
import { attendanceLoadAll } from "../services/attendances";
import UserAttendedEvents from "../components/UserAttendedEvents";
import ProfileComponent from "../components/ProfileComponent";
import { useAuthContext } from "../context/authentication";

const Profile = () => {
  const [attendances, setAttendances] = useState([]);
  const { authToken } = useAuthContext();

  useEffect(() => {
    attendanceLoadAll(authToken).then((data) =>
      setAttendances(data.attendances)
    );
  }, [authToken]);

  return (
    <div>
      {/* <ProfileComponent /> */}
      <h1>Your favorite events</h1>
      <UserAttendedEvents attendances={attendances} />
    </div>
  );
};

export default Profile;
