import {
  GoogleMap,
  LoadScript,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
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

const BerlinStateOpera = {
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

  const handleClickPinGermanMuseum = () => {
    changer = true;

    setInfo({
      eventName: "German Historical Museum",
      description:
        "The section at the Deutsches Historisches Museum focuses on watershed moments in gay liberation within the German state, specifically focusing on section 175 of the German penal code, which was in effect from 1872 to 1994 and made “homosexual acts” between men punishable by law.",
      createdUser: "Admin user",
      location: "Unter den Linden 7, 10117 Berlin, Alemania",
    });
  };

  const handleClickPinBerlinStateOpera = () => {};

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* Child components, such as markers, info windows, etc. */}

          <MarkerF
            position={GermanHistoricalMuseum}
            onClick={handleClickPinGermanMuseum}
          />

          <MarkerF
            position={BerlinStateOpera}
            onClick={handleClickPinBerlinStateOpera}
          />
        </GoogleMap>
      )}
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
        </>
      )}
    </>
  );
};

export default PinLocationMap;
