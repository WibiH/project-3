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
  lat: 52.51724376617329,
  lng: 13.394666172695576,
};

const Linden_Friedrichstraße = {
  lat: 52.5173016121273,
  lng: 13.388844684980436,
};

const Reichstag_Building = {
  lat: 52.51894133370614,
  lng: 13.376220479375386,
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
      location: "Linden 2, 10117 Berlin, Alemania",
    });
  };

  const handleClickPinBerlinStateOpera = () => {
    changer = true;

    setInfo({
      eventName: "Berlin State Opera",
      description:
        "The Staatsoper Unter den Linden (State Opera under the Lime Trees), also known as the Berlin State Opera (German: Staatsoper Berlin), is a listed building on Unter den Linden boulevard in the historic center of Berlin, Germany. The opera house was built by order of Prussian king Frederick the Great from 1741 to 1743 according to plans by Georg Wenzeslaus von Knobelsdorff in the Palladian style.",
      createdUser: "Admin user",
      location: "Linden 7, 10117 Berlin, Alemania",
    });
  };

  const handleClickPinLinden_Friedrichstraße = () => {
    changer = true;

    setInfo({
      eventName: "Linden & Friedrichstraße",
      description:
        "The Friedrichstraße  is a major culture and shopping street in central Berlin, forming the core of the Friedrichstadt neighborhood and giving the name to Berlin Friedrichstraße station. It runs from the northern part of the old Mitte district (north of which it is called Chausseestraße) to the Hallesches Tor in the district of Kreuzberg.",
      createdUser: "Admin user",
      location: "Linden & Friedrichstraße, 10117 Berlin, Alemania",
    });
  };

  const handleClickPinReichstag_Building = () => {
    changer = true;

    setInfo({
      eventName: "Reichstag Building",
      description:
        "Germany's federal parliament, also known as the Bundestag, raised the rainbow flag for the first time on Saturday (07/23/2022) as the city held a parade and other events celebrating the lesbian, gay, bisexual, transgender and queer community. The flag, with its six colored stripes, stands for tolerance. The flag was erected in the morning atop the southwest tower of the Reichstag building in the German capital, Berlin. Two more were raised in front of the east and west portals.",
      createdUser: "Admin user",
      location: "Platz der Republik 1, 11011 Berlin, Alemania",
    });
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {/* Child components, such as markers, info windows, etc. */}

          <MarkerF
            position={GermanHistoricalMuseum}
            onClick={handleClickPinGermanMuseum}
          />

          <MarkerF
            position={BerlinStateOpera}
            onClick={handleClickPinBerlinStateOpera}
          />

          <MarkerF
            position={Linden_Friedrichstraße}
            onClick={handleClickPinLinden_Friedrichstraße}
          />

          <MarkerF
            position={Reichstag_Building}
            onClick={handleClickPinReichstag_Building}
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
