import React, { useState, useEffect } from "react";
import Map from "../../Map/Map";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import TeamColor from "../../TeamColor/TeamColor";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};

const CircuitTab = ({ raceInfo, eventCountryCode }) => {
  const [fastestLap, setFastestLap] = useState(null);
  const [firstGrandPrix, setFirstGrandPrix] = useState(null);
  const [wikiPageId, setWikiPageId] = useState(null);
  const [circuitInformation, setCircuitInformation] = useState(null);
  const [loadingWikiData, setLoadingWikiData] = useState(true);
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

          return fetch(
            `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${raceInfo.Circuit.circuitName}&origin=*`,
            { method: "GET" }
          );
        })
        .then((res) => res.json())
        .then((result) => {
          setWikiPageId(Object.keys(result.query.pages));
          setCircuitInformation(result.query.pages);
          setLoadingWikiData(false);
        });
    };

    fetchCircuitFastestLap();
    fetchCircuitFirstGP();
  }, [raceInfo.Circuit.circuitId, raceInfo.Circuit.circuitName]);

  return (
    <div>
      <Row className="text-center">
        <h1>{raceInfo.Circuit.circuitName}</h1>
        <h3>
          <CircleFlag countryCode={eventCountryCode} height="30" />{" "}
          {raceInfo.Circuit.Location.country}
        </h3>
        <h3>{raceInfo.Circuit.Location.locality}</h3>
      </Row>

      {loadingWikiData ? null : (
        <Row>
          <p style={{ textAlign: "justify" }}>
            {circuitInformation[wikiPageId]["extract"]} (Source:{" "}
            <a
              href={`https://en.wikipedia.org/wiki/${circuitInformation[wikiPageId]["title"]}`}
            >
              Wikipedia
            </a>
            )
          </p>
        </Row>
      )}

      <Row>
        <Col>
          <Map
            coordinates={[
              raceInfo.Circuit.Location.lat,
              raceInfo.Circuit.Location.long,
            ]}
            circuitName={raceInfo.Circuit.circuitName}
            mapHeight={{ height: "700px" }}
          />
        </Col>
        <Col style={{ marginTop: "5%" }}>
          {loadingFastestLap || loadingFirstGrandPrix ? null : (
            <>
              <Row className="text-center">
                <h5 style={{ fontSize: "30px" }}>First Grand Prix</h5>
                <h5>{firstGrandPrix}</h5>
              </Row>
              {fastestLap === undefined ? null : (
                <div>
                  <Row className="text-center">
                    <h5 style={{ fontSize: "30px" }}>Lap record</h5>
                    <h5>{fastestLap.Results[0].FastestLap.Time.time}</h5>
                    <h5 style={{ fontSize: "25px" }}>{fastestLap.season}</h5>
                  </Row>
                  <Row className="justify-content-center text-center">
                    <Col xs="auto">
                      <TeamColor
                        constructorId={
                          fastestLap.Results[0].Constructor.constructorId
                        }
                        height="50px"
                      />
                    </Col>
                    <Col xs={4}>
                      <h5 style={{ fontSize: "20px" }}>
                        {fastestLap.Results[0].Driver.givenName}{" "}
                        <p style={boldFont}>
                          {fastestLap.Results[0].Driver.familyName.toUpperCase()}
                        </p>
                      </h5>
                    </Col>
                    <Col xs={2}>
                      <CircleFlag
                        countryCode={CountriesCodeNationality[
                          fastestLap.Results[0].Driver.nationality
                        ].toLowerCase()}
                        height={40}
                        width={50}
                      />
                    </Col>
                  </Row>
                  <Row className="text-center">
                    <h5 style={{ fontSize: "25px" }}>
                      {fastestLap.Results[0].Constructor.name}{" "}
                    </h5>
                  </Row>
                </div>
              )}
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CircuitTab;
