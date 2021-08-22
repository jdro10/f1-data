import React from "react";
import Map from "../../Map/Map";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Flag from "react-world-flags";

const CircuitTab = ({ raceInfo, eventCountryCode }) => {
  return (
    <div>
      <Row>
        <Col>
          <h1>{raceInfo.circuitName}</h1>
          <h3>{raceInfo.circuitCountry}</h3>
          <h3>{raceInfo.circuitLocality}</h3>
          <Flag code={eventCountryCode} height="30" />
        </Col>
        <Col>
          <Map
            coordinates={[raceInfo.circuitLatitude, raceInfo.circuitLongitude]}
            circuitName={raceInfo.circuitName}
          ></Map>
        </Col>
      </Row>
    </div>
  );
};

export default CircuitTab;
