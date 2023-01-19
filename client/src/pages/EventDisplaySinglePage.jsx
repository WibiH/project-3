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
  //const [attendances, setAttendances] = useState([]);

  const { user } = useAuthContext();

  useEffect(() => {
    eventLoadSingle(id).then((data) => {
      setEvent(data.event);
      console.log(data.event);
    });
  }, [id]);
  // console.log(event);

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
        {console.log(event)}
        {event && (
          <Link className="btn-primary" to={`/events/${id}/edit`}>
            Edit and Delete
          </Link>
        )}
      </div>
    </div>
  );
};

export default EventDisplaySinglePage;
