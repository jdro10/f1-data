import React, { useState, useEffect } from "react";
import Map from "../Map/Map";
import Row from "react-bootstrap/Row";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../data/CountryCodeNationality";
import Spinner from "react-bootstrap/Spinner";

import CircuitInformation from "./CircuitInformation";

const Circuit = ({ raceInfo, eventCountryCode }) => {
  const [firstGP, setFirstGP] = useState(null);
  const [lastGP, setLastGP] = useState(null);
  const [lastGPDetails, setLastGPDetails] = useState(null);
  const [fastestLap, setFastestLap] = useState(null);
  const [wikiPageId, setWikiPageId] = useState(null);
  const [circuitInformation, setCircuitInformation] = useState(null);
  const [loadingWikiData, setLoadingWikiData] = useState(true);
  const [loadingFirstGP, setLoadingFirstGP] = useState(true);
  const [loadingFastestLap, setLoadingFastestLap] = useState(true);
  const [loadingLastGPDetails, setLoadingLastGPDetails] = useState(true);

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
          setFirstGP(result.MRData.RaceTable.Races[0]);
          setLoadingFirstGP(false);

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

    const fetchCircuitLastRaceDetails = () => {
      fetch(
        `https://ergast.com/api/f1/circuits/${raceInfo.Circuit.circuitId}/results/1.json?limit=100`
      )
        .then((res) => res.json())
        .then((result) => {
          setLastGPDetails(
            result.MRData.RaceTable.Races[
              result.MRData.RaceTable.Races.length - 1
            ]
          );
          setLoadingLastGPDetails(false);
        });
    };

    fetchCircuitFastestLap();
    fetchCircuitFirstGP();
    fetchCircuitLastRaceDetails();
  }, [raceInfo.Circuit.circuitId, raceInfo.Circuit.circuitName]);

  return (
    <>
      <Row className="text-center">
        <h1>{raceInfo.Circuit.circuitName.toUpperCase()}</h1>
        <h3>
          <CircleFlag
            countryCode={CountriesCodeNationality[
              eventCountryCode
            ].toLowerCase()}
            height="30"
          />{" "}
          {raceInfo.Circuit.Location.country} (
          {raceInfo.Circuit.Location.locality})
        </h3>
      </Row>

      {loadingWikiData ? null : (
        <Row>
          <p style={{ textAlign: "justify" }}>
            {circuitInformation[wikiPageId]["extract"]}
            <br />
            Source:{" "}
            <a
              href={`https://en.wikipedia.org/wiki/${circuitInformation[wikiPageId]["title"]}`}
            >
              Wikipedia
            </a>
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

      {loadingFastestLap || loadingFirstGP || loadingLastGPDetails ? (
        <Row
          className="justify-content-center text-center"
          style={{ marginTop: "15px" }}
        >
          <Spinner animation="border" />
        </Row>
      ) : (
        <CircuitInformation
          firstGP={firstGP}
          lastGP={lastGP}
          lastGPDetails={lastGPDetails}
          fastestLap={fastestLap}
        />
      )}
    </>
  );
};

export default Circuit;
