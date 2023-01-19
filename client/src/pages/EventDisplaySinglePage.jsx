import React from "react";
import { useState, useEffect } from "react";
import EventContent from "../components/EventContent";
import { useParams, Link } from "react-router-dom";
import { eventLoadSingle } from "../services/event";
import { useAuthContext } from "../context/authentication";
//import { attendanceLoadAll } from "../services/attendances";

const EventDisplaySinglePage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
<<<<<<< HEAD
  //const [attendances, setAttendances] = useState([]);
=======
  const [isCreatedUser, setIsCreatedUser] = useState(false);
>>>>>>> ab76008faec26fc00b4b3470d91589f0cd62517c

  const { user } = useAuthContext();

  useEffect(() => {
    console.log("useEffect Start");
    eventLoadSingle(id).then((data) => {
      setEvent(data.event);
      console.log("event", data.event);
      console.log("user ID", user._id);
      console.log("FINDING CREATEDUSER", event.createdUser._id);
      setIsCreatedUser(user._id === data.event.createdUser._id ? true : false);
    });
  }, [id]);
<<<<<<< HEAD
  // console.log(event);
=======

  if (!event?.createdUser?._id) {
    return <h1>I am loading</h1>;
  }
>>>>>>> ab76008faec26fc00b4b3470d91589f0cd62517c

  /*
  useEffect(() => {
    attendanceLoadAll().then((data) => attendanceLoadAll(data.attendances));
  }, []);
  */

  return (
    <div className="flex flex-col space-x-12 p-5">
      {/* <EventContent event={event} /> */}
      {event && <EventContent event={event} defaultValue={false} />}

      <div className="">
        {/* {console.log(event)} */}
        {event && isCreatedUser && (
          <Link className="btn-primary" to={`/events/${id}/edit`}>
            Edit and Delete
          </Link>
        )}
      </div>
    </div>
  );
};

export default EventDisplaySinglePage;
