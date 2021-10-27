import React, { useState, useEffect, useContext } from "react";
import Map from "../../Map/Map";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import TeamColor from "../../TeamColor/TeamColor";
import Table from "react-bootstrap/Table";
import { ThemeContext } from "../../../helpers/ThemeContext";
import { useHistory } from "react-router-dom";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};

const CircuitTab = ({ raceInfo, eventCountryCode }) => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);
  const [lastGP, setLastGP] = useState(null);
  const [fastestLap, setFastestLap] = useState(null);
  const [firstGrandPrix, setFirstGrandPrix] = useState(null);
  const [wikiPageId, setWikiPageId] = useState(null);
  const [circuitInformation, setCircuitInformation] = useState(null);
  const [loadingWikiData, setLoadingWikiData] = useState(true);
  const [loadingFastestLap, setLoadingFastestLap] = useState(true);
  const [loadingFirstGrandPrix, setLoadingFirstGrandPrix] = useState(true);

  const driverRowClick = (driverId) => {
    history.push(`/driver/${driverId}`);
  };

  const constructorRowClick = (wikiConstructorLink) => {
    window.open(wikiConstructorLink, "_blank");
  };

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

          setLastGP(
            result.MRData.RaceTable.Races[
              result.MRData.RaceTable.Races.length - 1
            ]
          );
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

  const calculateCircuitLength = (speed, time) => {
    const timeSplitted = time.split(":");
    const secondsSplitted = time.split(".");
    const timeInSeconds =
      parseInt(timeSplitted[0] * 60) +
      parseInt(timeSplitted[1]) +
      parseFloat(secondsSplitted[1] / 1000);
    const metersPerSecond = (parseFloat(speed) * 1000) / 3600;

    const length = (metersPerSecond * timeInSeconds) / 1000;

    return Math.round(length * 1000) / 1000;
  };

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
          className="standings-table table-striped table-hover"
          variant={theme}
          style={{ marginTop: "15px" }}
        >
          <tbody>
            <tr>
              <td className="row-stats">First grand prix</td>
              <td className="text-end row-stats">{firstGrandPrix}</td>
            </tr>
            {fastestLap === undefined ? null : (
              <>
                <tr>
                  <td className="row-stats">Current layout length</td>
                  <td className="text-end row-stats">
                    {calculateCircuitLength(
                      parseFloat(
                        lastGP.Results[0].FastestLap.AverageSpeed.speed
                      ),
                      lastGP.Results[0].FastestLap.Time.time
                    )}{" "}
                    km
                  </td>
                </tr>
                <tr>
                  <td className="row-stats">Lap record (All track layouts)</td>
                  <td className="text-end row-stats">
                    {fastestLap.Results[0].FastestLap.Time.time} (
                    {fastestLap.season})
                  </td>
                </tr>
                <tr>
                  <td className="row-stats">Average speed</td>
                  <td className="text-end row-stats">
                    {fastestLap.Results[0].FastestLap.AverageSpeed.speed} km/h
                  </td>
                </tr>
                <tr>
                  <td className="row-stats">Length</td>
                  <td className="text-end row-stats">
                    {calculateCircuitLength(
                      parseFloat(
                        fastestLap.Results[0].FastestLap.AverageSpeed.speed
                      ),
                      fastestLap.Results[0].FastestLap.Time.time
                    )}{" "}
                    km
                  </td>
                </tr>
                <tr>
                  <td className="row-stats">Driver</td>
                  <td
                    className="clickable-row text-end"
                    onClick={() =>
                      driverRowClick(fastestLap.Results[0].Driver.driverId)
                    }
                  >
                    {fastestLap.Results[0].Driver.givenName}{" "}
                    <p style={boldFont}>
                      {fastestLap.Results[0].Driver.familyName.toUpperCase()}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="row-stats">Team</td>
                  <td
                    className="clickable-row text-end"
                    onClick={() =>
                      constructorRowClick(fastestLap.Results[0].Constructor.url)
                    }
                  >
                    <Row className="justify-content-end text-end">
                      <Col xs="auto">
                        <TeamColor
                          constructorId={
                            fastestLap.Results[0].Constructor.constructorId
                          }
                          height="30px"
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
