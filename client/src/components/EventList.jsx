import React from "react";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  return (
    <div>
      {events.map((eachEvent) => {
        return (
          <div key={eachEvent._id}>
            <Link to={`/events/${eachEvent._id}`}>
              <h1>{eachEvent.eventName}</h1>
              <h3>Date: {eachEvent.dateTime.split("T")[0].toString()}</h3>
              <h3>
                Time: {eachEvent.dateTime.split("T")[1].split(":", 2).join(":")}
              </h3>
              <h6>Host: {eachEvent.createdUser.name}</h6>
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
