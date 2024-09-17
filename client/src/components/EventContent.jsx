import React from "react";
import AttendanceButton from "./AttendanceButton";

const EventContent = ({ event }) => {
  // const { eventName, description, createdUser, picture, location, dateTime } =
  //   event;

  return (
    <div>
      {event && (
        <div className="p-8 m-8">
          <div
            className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
            style={{
              backgroundImage: `url(` + `${event.picture}` + `)`,
              height: "400px",
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-white">
                  <h2 className="font-semibold text-3xl mb-4 md:text-4xl">
                    {event.eventName}
                  </h2>
                  <h4 className="font-semibold text-l mb-6 md:text-xl">
                    Date: {event.dateTime.split("T")[0].toString()}
                    <br />
                    Time: {event.dateTime.split("T")[1].split(":", 2).join(":")}
                  </h4>

                  <AttendanceButton event={event} />
                </div>
              </div>
            </div>
          </div>

          {/* {event.picture && <img src={event.picture} alt={event.eventName} />} */}
          <h1 className="text-2xl font-bold mb-1 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {event.eventName}
          </h1>
          <h3 className="font-semibold text-gray-600 mb-4">{event.location}</h3>
          <h3 className="text-l font-semibold mb-2 text-gray-700">
            Date: {event.dateTime.split("T")[0].toString()}
            <br />
            Time: {event.dateTime.split("T")[1].split(":", 2).join(":")}
          </h3>
          <h5 className="text-m mb-4">Host: {event.createdUser.name}</h5>
          <p className="mx-auto">{event.description}</p>
        </div>
      )}
    </div>
  );
};

export default EventContent;
