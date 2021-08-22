import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DriversStandings from "../Standings/DriversStandings";
import ConstructorsStandings from "../Standings/ConstructorsStandings";
import SyncLoader from "react-spinners/SyncLoader";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import Countdown from "react-countdown";

const LatestStats = () => {
  const [nextRaceData, setNextRaceData] = useState(null);
  const [latestRaceResult, setLatestRaceResult] = useState(null);
  const [totalNumberOfRaces, setTotalNumberOfRaces] = useState(null);
  const [loadingNextRaceData, setLoadingNextRaceData] = useState(true);
  const [loadingLatestRaceResult, setLoadingLatestRaceResult] = useState(true);

  useEffect(() => {
    const fetchRaceResult = async () => {
      const response = await fetch(
        `http://ergast.com/api/f1/current/last/results.json`
      );
      const data = await response.json();

      setLatestRaceResult({
        season: data.MRData.RaceTable.season,
        round: data.MRData.RaceTable.round,
        raceName: data.MRData.RaceTable.Races[0].raceName,
        date: data.MRData.RaceTable.Races[0].date,
        circuitCountryCode: await fetchCountryCode(
          data.MRData.RaceTable.Races[0].Circuit.Location.country
        ),
        circuitName: data.MRData.RaceTable.Races[0].Circuit.circuitName,
        raceWinnerNumber: data.MRData.RaceTable.Races[0].Results[0].number,
        raceWinnerGivenName:
          data.MRData.RaceTable.Races[0].Results[0].Driver.givenName,
        raceWinnerFamilyName:
          data.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
      });
      setLoadingLatestRaceResult(false);
      fetchNextRaceData(data.MRData.RaceTable.round);
    };

    const fetchNextRaceData = async (round) => {
      const response = await fetch(`http://ergast.com/api/f1/current.json`);
      const data = await response.json();

      setNextRaceData({
        round: data.MRData.RaceTable.Races[parseInt(round)].round,
        raceName: data.MRData.RaceTable.Races[parseInt(round)].raceName,
        circuitCountryCode: await fetchCountryCode(
          data.MRData.RaceTable.Races[parseInt(round)].Circuit.Location.country
        ),
        raceCountry:
          data.MRData.RaceTable.Races[parseInt(round)].Circuit.Location.country,
        circuitName:
          data.MRData.RaceTable.Races[parseInt(round)].Circuit.circuitName,
        date: data.MRData.RaceTable.Races[parseInt(round)].date,
        time: data.MRData.RaceTable.Races[parseInt(round)].time.substring(
          0,
          data.MRData.RaceTable.Races[0].time.length - 1
        ),
      });

      setTotalNumberOfRaces(data.MRData.RaceTable.Races.length);

      setLoadingNextRaceData(false);
    };

    fetchRaceResult();
  }, []);

  const fetchCountryCode = async (circuitCountry) => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${circuitCountry}?fullText=true`
    );
    const data = await response.json();

    return data[0].alpha3Code;
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <GenericCard
              cardTitle={
                loadingLatestRaceResult
                  ? ""
                  : "Latest race - " + latestRaceResult.date
              }
              cardBody={
                loadingLatestRaceResult ? (
                  <SyncLoader color="black" loading="true" size={10} />
                ) : (
                  <div>
                    <h2>
                      {latestRaceResult.raceName +
                        " - " +
                        latestRaceResult.circuitName}
                    </h2>
                    <Flag
                      code={latestRaceResult.circuitCountryCode}
                      height="50"
                    />
                  </div>
                )
              }
              cardFooter={
                loadingLatestRaceResult ? (
                  ""
                ) : (
                  <Link
                    to={
                      "/race/" +
                      latestRaceResult.season +
                      "/" +
                      latestRaceResult.round
                    }
                  >
                    <Button variant="primary">Race result</Button>
                  </Link>
                )
              }
              cardHeight="18rem"
            ></GenericCard>
          </Col>
          <Col>
            <GenericCard
              cardTitle={
                loadingNextRaceData ? "" : "Next race - " + nextRaceData.date
              }
              cardBody={
                loadingNextRaceData ? (
                  <SyncLoader color="black" loading="true" size={10} />
                ) : (
                  <div>
                    <h3>
                      {nextRaceData.raceName + " - " + nextRaceData.circuitName}
                    </h3>
                    <Flag code={nextRaceData.circuitCountryCode} height="50" />
                  </div>
                )
              }
              cardFooter={
                loadingNextRaceData ? (
                  ""
                ) : (
                  <Link to={"/home"}>
                    <Button variant="primary">Race information</Button>
                  </Link>
                )
              }
              cardHeight="18rem"
            ></GenericCard>
          </Col>
          <Col>
            <GenericCard
              cardTitle="Round"
              cardBody={
                loadingLatestRaceResult ? (
                  <SyncLoader color="black" loading="true" size={10} />
                ) : (
                  <div style={{ width: 150, height: 100 }}>
                    <CircularProgressbar
                      value={
                        (latestRaceResult.round * 100) / totalNumberOfRaces
                      }
                      text={latestRaceResult.round + "/" + totalNumberOfRaces}
                    />
                  </div>
                )
              }
              cardFooter={
                loadingNextRaceData ? (
                  ""
                ) : (
                  <h4>
                    Next race:{" "}
                    <Countdown
                      date={
                        Date.now() +
                        (new Date(nextRaceData.date).getTime() +
                          nextRaceData.time.split(":")[0] * 3600000 -
                          new Date().getTime())
                      }
                    />
                  </h4>
                )
              }
              cardHeight="18rem"
            ></GenericCard>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <GenericCard
              cardTitle="Drivers' standings"
              cardBody={<DriversStandings />}
              cardHeight="27rem"
            ></GenericCard>
          </Col>
          <Col>
            <GenericCard
              cardTitle="Constructors' standings"
              cardBody={<ConstructorsStandings />}
              cardHeight="27rem"
            ></GenericCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestStats;
