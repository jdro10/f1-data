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

const cardsSpacing = {
  marginBottom: "10px",
};

const MainFeed = () => {
  const TOTAL_NUMBER_OF_RACES = "23";
  const [nextRace, setNextRace] = useState(null);
  const [lastRace, setLastRace] = useState(null);
  const [driversStandings, setDriversStandings] = useState(null);
  const [loadingNextRace, setLoadingNextRace] = useState(true);
  const [loadingLastRace, setLoadingLastRace] = useState(true);
  const [constructorsStandings, setConstructorsStandings] = useState(null);
  const [loadingTeamsStandings, setLoadingTeamsStandings] = useState(true);
  const [loadingDriversStandings, setLoadingDriversStandings] = useState(true);

  useEffect(() => {
    const fetchLastRaceResult = async () => {
      await fetch(`https://ergast.com/api/f1/current/last/results.json`)
        .then((res) => res.json())
        .then((result) => {
          setLastRace(result);
          setLoadingLastRace(false);
        });
    };

    const fetchNextRaceData = async (round) => {
      await fetch(`https://ergast.com/api/f1/current/next.json`)
        .then((res) => res.json())
        .then((result) => {
          setNextRace(result.MRData.RaceTable.Races[0]);
          setLoadingNextRace(false);
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

    fetchLastRaceResult();
    fetchNextRaceData();
    fetchDriversStandings();
    fetchConstructorsStandings();
  }, []);

  return (
    <Container style={{ minHeight: "500px" }}>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <h1>
            {loadingLastRace ? null : lastRace.MRData.RaceTable.season} FORMULA
            ONE
          </h1>
        </Col>
      </Row>
      {loadingLastRace || loadingNextRace ? (
        <Row className="justify-content-center text-center">
          <Spinner animation="border" />
        </Row>
      ) : (
        <>
          <Row className="justify-content-center text-center">
            <Col lg={12} style={cardsSpacing}>
              <NextRaceCard nextRace={nextRace} />
            </Col>
            <Col xs={12} lg={6} style={cardsSpacing}>
              <PreviousRaceCard lastRace={lastRace} />
            </Col>
            <Col xs={12} lg={6} style={cardsSpacing}>
              <PreviousRaceStats
                lastRace={lastRace}
                numberOfRaces={TOTAL_NUMBER_OF_RACES}
              />
            </Col>
          </Row>
          {loadingDriversStandings || loadingTeamsStandings ? (
            <Row className="justify-content-center text-center">
              <Spinner animation="border" />
            </Row>
          ) : (
            <Row>
              <Col style={cardsSpacing}>
                <DriversStandingsCard driversStandings={driversStandings} />
              </Col>
              <Col style={cardsSpacing}>
                <ConstructorsStandingsCard
                  constructorsStandings={constructorsStandings}
                />
              </Col>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default MainFeed;
