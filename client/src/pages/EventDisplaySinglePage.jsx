import React from "react";
import { useState, useEffect } from "react";
import EventContent from "../components/EventContent";
import { useParams, Link } from "react-router-dom";
import { eventLoadSingle } from "../services/event";
import { useAuthContext } from "../context/authentication";

const EventDisplaySinglePage = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  //const [attendances, setAttendances] = useState([]);
  const [isCreatedUser, setIsCreatedUser] = useState(false);

  useEffect(() => {
    // console.log("useEffect Start");
    eventLoadSingle(id).then((data) => {
      setEvent(data.event);
      // console.log("event", data.event);
      // console.log("user ID", user._id);
      // console.log("FINDING CREATEDUSER", event.createdUser._id);
      setIsCreatedUser(user && user._id === data.event.createdUser._id);
    });
  }, [id, user]);

  // console.log(event);

  if (!event?.createdUser?._id) {
    return <h1>I am loading</h1>;
  }

  /*
  useEffect(() => {
    attendanceLoadAll().then((data) => attendanceLoadAll(data.attendances));
  }, []);
  */

  return (
    <div className="flex flex-col space-x-12 p-5">
      {/* <EventContent event={event} /> */}
      {event && <EventContent event={event} />}

      <div className="">
        {/* {console.log(event)} */}
        {event && isCreatedUser && (
          <Link className="btn-rainbow mx-auto" to={`/events/${id}/edit`}>
            Edit and Delete
          </Link>
        )}
      </div>
    </div>
  );
};

export default EventDisplaySinglePage;
