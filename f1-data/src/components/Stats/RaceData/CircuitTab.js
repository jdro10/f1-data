import React from "react";
import Map from "../../Map/Map";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircleFlag } from "react-circle-flags";
import Circuit from "./CircuitData";

const CircuitTab = ({ raceInfo, eventCountryCode }) => {
  return (
    <div>
      <Row className="justify-content-center text-center">
        <Col>
          <h1>{raceInfo.Circuit.circuitName}</h1>
          <h3>
            <CircleFlag countryCode={eventCountryCode} height="30" />{" "}
            {raceInfo.Circuit.Location.country}
          </h3>
          <h3>{raceInfo.Circuit.Location.locality}</h3>
          <Circuit circuitId={raceInfo.Circuit.circuitId} />
        </Col>
        <Col md="auto">
          <Map
            coordinates={[
              raceInfo.Circuit.Location.lat,
              raceInfo.Circuit.Location.long,
            ]}
            circuitName={raceInfo.Circuit.circuitName}
            mapHeight={{ height: "600px" }}
          ></Map>
        </Col>
      </Row>
    </div>
  );
};

export default CircuitTab;
