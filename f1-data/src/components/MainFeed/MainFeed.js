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
import { FiRefreshCcw } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import "./Styles.css";

const MainFeed = () => {
  const CURRENT_SEASON = "2021";
  const TOTAL_NUMBER_OF_RACES = "22";
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

  const refreshCache = () => {
    caches.keys().then(function (cacheNames) {
      cacheNames.forEach(function (cacheName) {
        caches.delete(cacheName);
      });
    });

    window.location.reload();
  };

  return (
    <Container style={{ minHeight: "600px" }}>
      <Row className="justify-content-center text-center title">
        <Col xs={{ span: 8, offset: 2 }}>
          <h1>{CURRENT_SEASON} FORMULA 1</h1>
        </Col>

        <Col xs={2} className="text-end">
          <Button
            onClick={() => refreshCache()}
            className="red-btn title"
            variant="danger"
          >
            <FiRefreshCcw />
          </Button>
        </Col>
      </Row>
      {loadingLastRace || loadingNextRace ? (
        <Row className="justify-content-center text-center">
          <Spinner animation="border" />
        </Row>
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
              <PreviousRaceStats
                lastRace={lastRace}
                numberOfRaces={TOTAL_NUMBER_OF_RACES}
              />
            </Col>
          </Row>
          {loadingDriversStandings || loadingTeamsStandings ? (
            <Row
              className="justify-content-center text-center"
              style={{ marginTop: "10px" }}
            >
              <Spinner animation="border" />
            </Row>
          ) : (
            <Row className="g-2" style={{ marginTop: "1px" }}>
              <Col xs={12} xl={6}>
                <DriversStandingsCard driversStandings={driversStandings} />
              </Col>

              <Col xs={12} xl={6}>
                <ConstructorsStandingsCard
                  constructorsStandings={constructorsStandings}
                  season={CURRENT_SEASON}
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
