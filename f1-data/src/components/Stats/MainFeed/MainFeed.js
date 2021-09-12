import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import PreviousRaceCard from "../MainFeed/PreviousRaceCard";
import NextRaceCard from "./NextRaceCard";
import Spinner from "react-bootstrap/Spinner";
import PreviousRaceStats from "./PreviousRaceStats";
import DriversStandingsCard from "./DriversStandingsCard";
import ConstructorsStandingsCard from "./ConstructorsStandingsCard";

const MainFeed = () => {
  const [nextRaceData, setNextRaceData] = useState(null);
  const [driversStandings, setDriversStandings] = useState(null);
  const [previousRaceResult, setPreviousRaceResult] = useState(null);
  const [totalNumberOfRaces, setTotalNumberOfRaces] = useState(null);
  const [constructorsStandings, setConstructorsStandings] = useState(null);
  const [loadingNextRaceData, setLoadingNextRaceData] = useState(true);
  const [loadingPreviousRace, setLoadingPreviousRace] = useState(true);
  const [loadingTeamsStandings, setLoadingTeamsStandings] = useState(true);
  const [loadingDriversStandings, setLoadingDriversStandings] = useState(true);

  useEffect(() => {
    const fetchPreviousRaceResult = async () => {
      await fetch(`https://ergast.com/api/f1/current/last/results.json`)
        .then((res) => res.json())
        .then((result) => {
          setPreviousRaceResult(result);
          setLoadingPreviousRace(false);
          return result;
        })
        .then((res) => fetchNextRaceData(res.MRData.RaceTable.round));
    };

    const fetchNextRaceData = async (round) => {
      await fetch(`https://ergast.com/api/f1/current.json`)
        .then((res) => res.json())
        .then((result) => {
          round >= result.MRData.RaceTable.Races.length
            ? setNextRaceData(null)
            : setNextRaceData(result.MRData.RaceTable.Races[parseInt(round)]);

          setTotalNumberOfRaces(result.MRData.RaceTable.Races.length);
          setLoadingNextRaceData(false);
        });
    };

    const fetchConstructorsStandings = async () => {
      await fetch(`https://ergast.com/api/f1/current/constructorStandings.json`)
        .then((res) => res.json())
        .then((result) => {
          setConstructorsStandings(
            result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
          );
          setLoadingTeamsStandings(false);
        });
    };

    const fetchDriversStandings = async () => {
      await fetch(`https://ergast.com/api/f1/current/driverStandings.json`)
        .then((res) => res.json())
        .then((result) => {
          setDriversStandings(
            result.MRData.StandingsTable.StandingsLists[0].DriverStandings
          );
          setLoadingDriversStandings(false);
        });
    };

    fetchPreviousRaceResult();
    fetchDriversStandings();
    fetchConstructorsStandings();
  }, []);

  return (
    <Container style={{ minHeight: "500px" }}>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <h1 style={{ marginBottom: "3%" }}>
            {loadingNextRaceData
              ? null
              : previousRaceResult.MRData.RaceTable.season}{" "}
            Formula One
          </h1>
        </Col>
      </Row>
      {loadingPreviousRace || loadingNextRaceData ? (
        <Row className="justify-content-center text-center">
          <Spinner animation="border" />
        </Row>
      ) : (
        <Row className="justify-content-center text-center">
          <Col lg={12}>
            {nextRaceData !== null ? (
              <>
                <NextRaceCard nextRaceData={nextRaceData} />
                <p></p>
              </>
            ) : null}
          </Col>
          <Col xs={12} lg={6}>
            <>
              <PreviousRaceCard previousRaceData={previousRaceResult} />
              <p></p>
            </>
          </Col>
          <Col xs={12} lg={6}>
            <PreviousRaceStats
              previousRaceData={previousRaceResult}
              totalNumberOfRaces={totalNumberOfRaces}
            />
            <p></p>
          </Col>
        </Row>
      )}
      {loadingDriversStandings || loadingTeamsStandings ? null : (
        <Row>
          <Col>
            <DriversStandingsCard driversStandings={driversStandings} />
            <p></p>
          </Col>
          <Col>
            <ConstructorsStandingsCard
              constructorsStandings={constructorsStandings}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MainFeed;
