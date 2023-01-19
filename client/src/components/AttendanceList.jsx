import React from "react";

const AttendanceList = ({ attendingUser }) => {
  return (
    <div>
      {attendingUser.map((eachAttendingUser) => {
        return (
          <div
            key={eachAttendingUser._id}
            className=" max-w-xl border border-gray-200 rounded-lg shadow-md my-4 mx-auto"
          >
            <div className="flex flex-row">
              <img
                className="object-cover rounded-tl-lg rounded-bl-lg w-1/3"
                src={eachAttendingUser.profilePicture}
                alt={eachAttendingUser.name}
              />
              <div className="px-6 py-4">
                <h4 className="mb-3 text-base font-semibold text-justify tracking-tight text-gray-900">
                  {eachAttendingUser.name}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AttendanceList;
