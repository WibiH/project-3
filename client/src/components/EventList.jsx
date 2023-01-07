import React from "react";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  return (
    <div>
      {events.map((eachEvent) => {
        return (
          <div key={eachEvent._id}>
            <Link to={`/events/${eachEvent._id}`}>
              <h3>
                {eachEvent.eventNames} - {eachEvent.dateTime}
              </h3>
              <h6>{eachEvent.createdUser}</h6>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;

// eventNames
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
