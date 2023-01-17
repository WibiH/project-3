import React from "react";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  return (
    <div>
      {events.map((eachEvent) => {
        return (
          <div
            key={eachEvent._id}
            className=" max-w-xl border border-gray-200 rounded-lg shadow-md my-4 mx-auto"
          >
            <Link to={`/events/${eachEvent._id}`}>
              <div className="flex flex-row">
                <img
                  className="object-cover rounded-tl-lg rounded-bl-lg w-1/3"
                  src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
                  alt={eachEvent.name}
                />
                <div className="px-6 py-4">
                  <h4 className="mb-3 text-base font-semibold text-justify tracking-tight text-gray-900">
                    {eachEvent.eventName}
                  </h4>
                  <p className="mb-2 text-sm leading-normal text-justify text-gray-700">
                    Date: {eachEvent.dateTime.split("T")[0].toString()}
                  </p>
                  <p className="mb-2 text-sm leading-normal text-justify text-gray-700">
                    Time:{" "}
                    {eachEvent.dateTime.split("T")[1].split(":", 2).join(":")}
                  </p>
                  <p className="mb-2 text-sm leading-normal text-justify text-gray-500">
                    Host: {eachEvent.createdUser.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;

// eventName
// description
// createdUser
// picture
// location
// dateTime

// "eventName": "Test Title",
// "description": "Test description",
// "createdUser": "",
// "dateTime":

// "name": "Tuffy",
//   "profilePicture": "",
//   "pronoun": "he/him/his",
//   "status": "user",
//   "email":"tuffy@gmail.com",
//   "password": "123"
