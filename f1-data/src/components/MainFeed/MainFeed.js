import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import PreviousRaceCard from "../MainFeed/PreviousRaceCard";
import NextRaceCard from "./NextRaceCard";
import PreviousRaceStats from "./PreviousRaceStats";
import DriversStandingsCard from "./DriversStandingsCard";
import ConstructorsStandingsCard from "./ConstructorsStandingsCard";
import "./Styles.css";
import LoadingCard from "../Cards/LoadingCard";
import { config } from "../../data/config";

const MainFeed = () => {
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
          setConstructorsStandings(result.MRData.StandingsTable.StandingsLists[0]);
          setLoadingTeamsStandings(false);
        });
    };

    const fetchDriversStandings = async () => {
      await fetch(`https://ergast.com/api/f1/current/driverStandings.json`)
        .then((res) => res.json())
        .then((result) => {
          setDriversStandings(result.MRData.StandingsTable.StandingsLists[0].DriverStandings);
          setLoadingDriversStandings(false);
        });
    };

    fetchLastRaceResult();
    fetchNextRaceData();
    fetchDriversStandings();
    fetchConstructorsStandings();
  }, []);

  return (
    <Container style={{ minHeight: "600px" }}>
      <Row className="justify-content-center text-center title">
        <h1>{config.current_season} FORMULA 1</h1>
      </Row>
      {loadingLastRace || loadingNextRace ? (
        <>
          <Row className="justify-content-center text-center g-2">
            <Col lg={12}>
              <LoadingCard cardHeight="28rem" hasButton={true} hasFlag={true} />
            </Col>

            <Col xs={12} xl={6}>
              <LoadingCard cardHeight="28rem" hasButton={true} hasFlag={true} />
            </Col>

            <Col xs={12} xl={6}>
              <LoadingCard cardHeight="28rem" hasButton={true} hasFlag={true} />
            </Col>

            <Row className="g-2" style={{ marginTop: "1px" }}>
              <Col xs={12} xl={6}>
                <LoadingCard cardHeight="28rem" hasButton={true} hasFlag={true} />
              </Col>

              <Col xs={12} xl={6}>
                <LoadingCard cardHeight="28rem" hasButton={true} hasFlag={true} />
              </Col>
            </Row>
          </Row>
        </>
      ) : (
        <>
          <Row className="justify-content-center text-center g-2">
            <Col lg={12}>
              <NextRaceCard nextRace={nextRace} />
            </Col>

            <Col xs={12} xl={6}>
              <PreviousRaceCard lastRace={lastRace} />
            </Col>

            <Col xs={12} xl={6}>
              <PreviousRaceStats lastRace={lastRace} />
            </Col>
          </Row>
          {loadingDriversStandings || loadingTeamsStandings ? (
            <Row className="g-2" style={{ marginTop: "1px" }}>
              <Col xs={12} xl={6}>
                <LoadingCard cardHeight="28rem" />
              </Col>

              <Col xs={12} xl={6}>
                <LoadingCard cardHeight="28rem" />
              </Col>
            </Row>
          ) : (
            <Row className="g-2" style={{ marginTop: "1px" }}>
              <Col xs={12} xl={6}>
                <DriversStandingsCard driversStandings={driversStandings} />
              </Col>

              <Col xs={12} xl={6}>
                <ConstructorsStandingsCard
                  constructorsStandings={constructorsStandings.ConstructorStandings}
                  season={constructorsStandings.season}
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
