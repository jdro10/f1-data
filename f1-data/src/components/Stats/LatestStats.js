import React, { useState, useEffect } from "react";
import GenericCard from "../Cards/GenericCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DriversStandings from "./DriversStandings";
import ConstructorsStandings from "./ConstructorsStandings";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const LatestStats = () => {
  const [latestRaceResult, setLatestRaceResult] = useState(null);
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
        circuitName: data.MRData.RaceTable.Races[0].Circuit.circuitName,
        raceWinnerNumber: data.MRData.RaceTable.Races[0].Results[0].number,
        raceWinnerGivenName:
          data.MRData.RaceTable.Races[0].Results[0].Driver.givenName,
        raceWinnerFamilyName:
          data.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
      });
      setLoadingLatestRaceResult(false);
    };

    fetchRaceResult();
  }, []);

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
                <h2>
                  {loadingLatestRaceResult ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    latestRaceResult.raceName +
                    " - " +
                    latestRaceResult.circuitName
                  )}
                </h2>
              }
              cardFooter={<Button variant="primary">Race result</Button>}
              cardHeight="18rem"
            ></GenericCard>
          </Col>
          <Col>
            <GenericCard
              cardTitle="Winner"
              cardBody={
                <h1>
                  {loadingLatestRaceResult ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    latestRaceResult.raceWinnerNumber +
                    " - " +
                    latestRaceResult.raceWinnerGivenName +
                    " " +
                    latestRaceResult.raceWinnerFamilyName
                  )}
                </h1>
              }
              cardFooter={<Button variant="primary">Driver information</Button>}
              cardHeight="18rem"
            ></GenericCard>
          </Col>
          <Col>
            <GenericCard
              cardTitle="Round"
              cardBody={
                loadingLatestRaceResult ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <div style={{ width: 150, height: 100 }}>
                    <CircularProgressbar
                      value={(latestRaceResult.round * 100) / 23}
                      text={latestRaceResult.round + "/23"}
                    />
                  </div>
                )
              }
              cardFooter={<h5>Next round: Belgian Grand Prix - 00:23:54</h5>}
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
