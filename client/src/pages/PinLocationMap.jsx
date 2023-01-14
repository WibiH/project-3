import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "90%",
  height: "400px",
};

const center = {
  lat: 52.52437,
  lng: 13.41053,
};

const GermanHistoricalMuseum = {
  lat: 52.51823676195955,
  lng: 13.396979255025004,
};

const TempelhofeR = {
  lat: 52.47441848155095,
  lng: 13.400455473251355,
};

const Brandenburger = {
  lat: 52.51771278205263,
  lng: 13.377366123173758,
};
let changer = false;

const PinLocationMap = () => {
  const [info, setInfo] = useState({
    eventName: "",
    description: "",
    createdUser: "",
    location: "",
    dateTime: "",
  });

  const handleClickPinNöldnerplatz = () => {
    changer = true;

    setInfo({
      eventName: "GermanHistoricalMuseum",
      description: "Nöldnerplatz description",
      createdUser: "Stuart",
      location: "berlin-Nöldnerplatz",
      dateTime: "today",
    });
  };

  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        id="map"
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* Child components, such as markers, info windows, etc. */}

          <MarkerF
            position={GermanHistoricalMuseum}
            onClick={handleClickPinNöldnerplatz}
          />
        </GoogleMap>
      </LoadScript>
      {changer && (
        <>
          <h1>
            {" "}
            <strong>Place Name:</strong> {info.eventName}
          </h1>
          <h3>
            {" "}
            <strong>Description:</strong> {info.description}
          </h3>
          <h3>
            {" "}
            <strong>Created by: </strong> {info.createdUser}
          </h3>
          <h3>
            {" "}
            <strong>Address: </strong> {info.location}
          </h3>
          <h4>
            {" "}
            <strong>Date and Time: </strong> {info.dateTime}
          </h4>{" "}
        </>
      )}
    </>
  );
};

export default PinLocationMap;
