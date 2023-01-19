import React from "react";
import { useState, useEffect } from "react";
import { attendanceLoadAll } from "../services/attendances";
import { userLoad } from "../services/authentication";
import UserAttendedEvents from "../components/UserAttendedEvents";
import ProfileComponent from "../components/ProfileComponent";
import { useAuthContext } from "../context/authentication";
import { useParams } from "react-router-dom";
import { useAttendanceContext } from "../context/attendances";

const Profile = () => {
  const [user, setUser] = useState([]);
  const { authToken } = useAuthContext();
  const { attendances, setAttendances } = useAttendanceContext();
  console.log(attendances);

  useEffect(() => {
    attendanceLoadAll(authToken).then((data) => {
      console.log(data.attendances);
      setAttendances(data.attendances);
    });
  }, [authToken, setAttendances]);

  const { id } = useParams();

  useEffect(() => {
    userLoad(id, authToken).then((data) => setUser(data.user));
  }, [id, authToken]);

  return (
    <div>
      <div>{user && <ProfileComponent user={user} />}</div>
      <div>
        <h1>Your favorite events</h1>
        {attendances.length && <UserAttendedEvents attendances={attendances} />}
      </div>
    </div>
  );
};

export default Profile;
