import React, { useState, useEffect } from "react";
import Map from "../../Map/Map";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircleFlag } from "react-circle-flags";

const CircuitTab = ({ raceInfo, eventCountryCode }) => {
  const [fastestLap, setFastestLap] = useState(null);
  const [firstGrandPrix, setFirstGrandPrix] = useState(null);
  const [loadingFastestLap, setLoadingFastestLap] = useState(true);
  const [loadingFirstGrandPrix, setLoadingFirstGrandPrix] = useState(true);

  useEffect(() => {
    const fetchCircuitFastestLap = () => {
      fetch(
        `https://ergast.com/api/f1/circuits/${raceInfo.Circuit.circuitId}/fastest/1/results.json`
      )
        .then((res) => res.json())
        .then((result) => {
          let bestLap = result.MRData.RaceTable.Races[0];

          result.MRData.RaceTable.Races.forEach((lap) => {
            if (
              lap.Results[0].FastestLap.Time.time <
              bestLap.Results[0].FastestLap.Time.time
            ) {
              bestLap = lap;
            }
          });

          setFastestLap(bestLap);
          setLoadingFastestLap(false);
        });
    };

    const fetchCircuitFirstGP = () => {
      fetch(
        `https://ergast.com/api/f1/circuits/${raceInfo.Circuit.circuitId}/races.json`
      )
        .then((res) => res.json())
        .then((result) => {
          setFirstGrandPrix(result.MRData.RaceTable.Races[0].season);
          setLoadingFirstGrandPrix(false);
        });
    };

    fetchCircuitFastestLap();
    fetchCircuitFirstGP();
  }, [raceInfo.Circuit.circuitId]);

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
          <div>
            {loadingFastestLap || loadingFirstGrandPrix ? null : (
              <div>
                {fastestLap === undefined ? null : (
                  <Row>
                    <h5>
                      Lap record: {fastestLap.Results[0].FastestLap.Time.time}
                      {" - "}
                      {fastestLap.season}
                      {" - "}
                      {fastestLap.Results[0].Driver.givenName}{" "}
                      {fastestLap.Results[0].Driver.familyName}{" "}
                    </h5>
                  </Row>
                )}
                <Row>
                  <h5>First grand prix: {firstGrandPrix}</h5>
                </Row>
              </div>
            )}
          </div>
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
