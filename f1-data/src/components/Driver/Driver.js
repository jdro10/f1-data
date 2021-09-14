import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { CircleFlag } from "react-circle-flags";
import { BsPersonFill } from "react-icons/bs";
import "../SharedStyles/Table.css";
import { CountriesCodeNationality } from "../../data/CountryCodeNationality";

const boldFont = {
  fontWeight: "600",
  fontSize: "25px",
};

const fontSize = {
  fontSize: "25px",
};

const Driver = ({ driverId }) => {
  const [lastGP, setLastGP] = useState(null);
  const [firstGP, setFirstGP] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wikiPageId, setWikiPageId] = useState(null);
  const [driverRaces, setDriverRaces] = useState(null);
  const [driverPhoto, setDriverPhoto] = useState(null);
  const [driverNationality, setDriverNationality] = useState(null);
  const [driverInformation, setDriverInformation] = useState(null);
  const [loadingDriverRaces, setLoadingDriverRaces] = useState(true);
  const [loadingDriverStats, setLoadingDriverStats] = useState(true);
  const [driverStats, setDriverStats] = useState({
    wins: 0,
    podiums: 0,
    poles: 0,
    totalPoints: 0,
    totalFastestLaps: 0,
    totalLapsRaced: 0,
    totalGrandPrix: 0,
  });

  useEffect(() => {
    const fetchDriverInformation = async () => {
      await fetch(`https://ergast.com/api/f1/drivers/${driverId}.json`)
        .then((res) => res.json())
        .then((result) => {
          const driverURL = result.MRData.DriverTable.Drivers[0].url;
          const driverName = driverURL.split("/")[4];
          setDriverNationality(
            result.MRData.DriverTable.Drivers[0].nationality
          );

          return fetch(
            `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${driverName}&origin=*`,
            { method: "GET" }
          );
        })
        .then((res) => res.json())
        .then((result) => {
          setWikiPageId(Object.keys(result.query.pages));
          setDriverInformation(result.query.pages);
          const driverName = result.query.pages[
            Object.keys(result.query.pages)
          ]["title"].replace(" ", "_");

          return fetch(
            `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${driverName}&origin=*`
          );
        })
        .then((res) => res.json())
        .then((result) => {
          setDriverPhoto(result.query.pages);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };

    const fetchDriverResults = async () => {
      await fetch(
        `https://ergast.com/api/f1/drivers/${driverId}/results.json?limit=1000`
      )
        .then((res) => res.json())
        .then((result) => {
          setDriverRaces(result.MRData.RaceTable.Races);
          setFirstGP(result.MRData.RaceTable.Races[0]);
          setLastGP(
            result.MRData.RaceTable.Races[parseInt(result.MRData.total - 1)]
          );
          setLoadingDriverRaces(false);
        });
    };

    const driversPodiumPlaces = () => {
      if (!loadingDriverRaces) {
        const wins = driverRaces.filter(
          (race) => race.Results[0].position === "1"
        ).length;

        const podiums = driverRaces.filter((race) =>
          ["1", "2", "3"].includes(race.Results[0].position)
        ).length;

        const poles = driverRaces.filter(
          (race) => race.Results[0].grid === "1"
        ).length;

        const totalPoints = driverRaces.reduce(
          (acc, current) => acc + parseInt(current.Results[0].points),
          0
        );

        const totalFastestLaps = driverRaces.filter(
          (race) =>
            race.Results[0].FastestLap &&
            race.Results[0].FastestLap.rank === "1"
        ).length;

        const totalLapsRaced = driverRaces.reduce(
          (acc, current) => acc + parseInt(current.Results[0].laps),
          0
        );

        setDriverStats({
          wins: wins,
          podiums: podiums,
          poles: poles,
          totalPoints: totalPoints,
          totalFastestLaps: totalFastestLaps,
          totalLapsRaced: totalLapsRaced,
          totalGrandPrix: driverRaces.length,
        });
        setLoadingDriverStats(false);
      }
    };

    if (loading) {
      fetchDriverInformation();
      fetchDriverResults();
    }

    driversPodiumPlaces();
  }, [driverId, loading, driverRaces, loadingDriverRaces]);

  return (
    <Container style={{ minHeight: "500px" }}>
      {loading ? (
        <Row className="justify-content-center text-center">
          <Spinner animation="border" />
        </Row>
      ) : (
        <>
          <Row className="justify-content-center text-center">
            <Col xs={12} lg="auto">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "60px",
                }}
              >
                {driverInformation[wikiPageId]["title"]}{" "}
              </h1>
            </Col>
            <Col xs={12} lg="auto" style={{ marginBottom: "20px" }}>
              <CircleFlag
                countryCode={CountriesCodeNationality[
                  driverNationality
                ].toLowerCase()}
                height={66}
              />
            </Col>
          </Row>
          <Row className="justify-content-center text-center">
            <Col xs={12} lg={3} style={{ marginBottom: "10px" }}>
              {driverPhoto[wikiPageId].hasOwnProperty("original") ? (
                <img
                  style={{ borderRadius: "10px" }}
                  src={driverPhoto[wikiPageId]["original"]["source"]}
                  width="250px"
                  alt="driver"
                />
              ) : (
                <BsPersonFill size={150} />
              )}
            </Col>
            <Col xs={12} lg={9}>
              <p style={{ textAlign: "justify" }}>
                {driverInformation[wikiPageId]["extract"]} (Source:{" "}
                <a
                  href={`https://en.wikipedia.org/wiki/${driverInformation[wikiPageId]["title"]}`}
                >
                  Wikipedia)
                </a>
              </p>
            </Col>
          </Row>
          {loadingDriverStats ? (
            <Row className="justify-content-center text-center">
              <Spinner animation="border" />
            </Row>
          ) : (
            <Row className="justify-content-center">
              <Table responsive className="table-width">
                <tbody>
                  <tr>
                    <td style={boldFont}>Wins</td>
                    <td className="text-end" style={fontSize}>
                      {driverStats.wins}
                    </td>
                  </tr>
                  <tr>
                    <td style={boldFont}>Podiums</td>
                    <td className="text-end" style={fontSize}>
                      {driverStats.podiums}
                    </td>
                  </tr>
                  <tr>
                    <td style={boldFont}>Fastest laps</td>
                    <td className="text-end" style={fontSize}>
                      {driverStats.totalFastestLaps}
                    </td>
                  </tr>
                  <tr>
                    <td style={boldFont}>Pole positions</td>
                    <td className="text-end" style={fontSize}>
                      {driverStats.poles}
                    </td>
                  </tr>
                  <tr>
                    <td style={boldFont}>Total points</td>
                    <td className="text-end" style={fontSize}>
                      {driverStats.totalPoints}
                    </td>
                  </tr>
                  <tr>
                    <td style={boldFont}>Total GPs entered</td>
                    <td className="text-end" style={fontSize}>
                      {driverStats.totalGrandPrix}
                    </td>
                  </tr>
                  <tr>
                    <td style={boldFont}>First GP</td>
                    <td className="text-end" style={fontSize}>
                      {firstGP.raceName} {firstGP.season}
                    </td>
                  </tr>
                  <tr>
                    <td style={boldFont}>Last GP</td>
                    <td className="text-end" style={fontSize}>
                      {lastGP !== undefined
                        ? lastGP.raceName + " " + lastGP.season
                        : "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td style={boldFont}>Total laps raced</td>
                    <td className="text-end" style={fontSize}>
                      {driverStats.totalLapsRaced}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default Driver;
