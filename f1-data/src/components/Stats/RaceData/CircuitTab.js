import React, { useState, useEffect, useContext } from "react";
import Map from "../../Map/Map";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import TeamColor from "../../TeamColor/TeamColor";
import Table from "react-bootstrap/Table";
import { ThemeContext } from "../../../helpers/ThemeContext";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};

const fontSize = {
  fontSize: "25px",
};

const CircuitTab = ({ raceInfo, eventCountryCode }) => {
  const { theme } = useContext(ThemeContext);
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
          <CircleFlag
            countryCode={CountriesCodeNationality[
              eventCountryCode
            ].toLowerCase()}
            height="30"
          />{" "}
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

      <Map
        coordinates={[
          raceInfo.Circuit.Location.lat,
          raceInfo.Circuit.Location.long,
        ]}
        circuitName={raceInfo.Circuit.circuitName}
        mapHeight={{ height: "700px" }}
      />

      {loadingFastestLap || loadingFirstGrandPrix ? null : (
        <Table
          responsive
          className="standings-table table-striped"
          variant={theme}
          style={{ marginTop: "15px" }}
        >
          <tbody>
            <tr>
              <td style={fontSize}>First grand prix</td>
              <td style={fontSize} className="text-end">
                {firstGrandPrix}
              </td>
            </tr>
            {fastestLap === undefined ? null : (
              <>
                <tr>
                  <td style={fontSize}>Lap record</td>
                  <td style={fontSize} className="text-end">
                    {fastestLap.Results[0].FastestLap.Time.time}
                  </td>
                </tr>
                <tr>
                  <td style={fontSize}>Average speed</td>
                  <td style={fontSize} className="text-end">
                    {fastestLap.Results[0].FastestLap.AverageSpeed.speed} km/h
                  </td>
                </tr>
                <tr>
                  <td style={fontSize}>Driver</td>
                  <td style={fontSize} className="text-end">
                    {fastestLap.Results[0].Driver.givenName}{" "}
                    <p style={boldFont}>
                      {fastestLap.Results[0].Driver.familyName.toUpperCase()}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={fontSize}>Team</td>
                  <td style={fontSize} className="text-end">
                    <Row className="justify-content-end text-end">
                      <Col xs="auto">
                        <TeamColor
                          constructorId={
                            fastestLap.Results[0].Constructor.constructorId
                          }
                          height="35px"
                        />
                      </Col>
                      <Col xs="auto">
                        {fastestLap.Results[0].Constructor.name}
                      </Col>
                    </Row>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default CircuitTab;
