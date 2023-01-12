import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 52.52437,
  lng: 13.41053,
};

const Nöldnerplatz = {
  lat: 52.50373786897999,
  lng: 13.480423318773171,
};

const TempelhofeR = {
  lat: 52.47441848155095,
  lng: 13.400455473251355,
};

const Brandenburger = {
  lat: 52.51771278205263,
  lng: 13.377366123173758,
};

const PinLocationMap = () => {
  const [info, setInfo] = useState({
    eventName: "",
    description: "",
    createdUser: "",
    location: "",
    dateTime: "",
  });
  const handleClickPin = () => {
    setInfo({
      eventName: "Branderburger",
      description: "some description",
      createdUser: "brandon",
      location: "berlin-brandergurger",
      dateTime: "21-12-1999",
    });
  };

  return (
    <>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* Child components, such as markers, info windows, etc. */}

          <MarkerF position={Nöldnerplatz} label="Nöldnerplatz" />
          <MarkerF position={TempelhofeR} label="TempelhofeR" />
          <MarkerF
            position={Brandenburger}
            cursor="Brandenburger"
            onClick={handleClickPin}
          />
        </GoogleMap>
      </LoadScript>

      <h1>
        {" "}
        <strong>Event Name:</strong> {info.eventName}
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
      </h4>
    </>
  );
};

export default PinLocationMap;
