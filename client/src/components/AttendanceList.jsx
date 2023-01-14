import React from "react";

const AttendanceList = ({ attendences }) => {
  return (
    <div>
      {attendences.map((eachAttendingUser) => {
        return (
          <div key={eachAttendingUser._id}>
            <h5>
              {eachAttendingUser.name}
              {eachAttendingUser.profilePicture}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default AttendanceList;
