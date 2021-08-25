import React, { useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import GenericCard from "../../Cards/GenericCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DriversStandings from "../Standings/DriversStandings";
import ConstructorsStandings from "../Standings/ConstructorsStandings";
import PreviousRaceCard from "../MainFeed/PreviousRaceCard";
import NextRaceCard from "../MainFeed/NextRaceCards";
import StandingsCard from "./StandingsCard";
import PuffLoader from "react-spinners/PuffLoader";
import PreviousRaceWinner from "./PreviousRaceWinner";

const MainFeed = () => {
  const [nextRaceData, setNextRaceData] = useState(null);
  const [driversStandings, setDriversStandings] = useState(null);
  const [previousRaceResult, setPreviousRaceResult] = useState(null);
  const [totalNumberOfRaces, setTotalNumberOfRaces] = useState(null);
  const [constructorsStandings, setConstructorsStandings] = useState(null);
  const [loadingNextRaceData, setLoadingNextRaceData] = useState(true);
  const [loadingPreviousRaceResult, setLoadingPreviousRaceResult] =
    useState(true);
  const [loadingConstructorsStandings, setLoadingConstructorsStandings] =
    useState(true);
  const [loadingDriversStandings, setLoadingDriversStandings] = useState(true);

  useEffect(() => {
    const fetchPreviousRaceResult = async () => {
      const response = await fetch(
        `https://ergast.com/api/f1/current/last/results.json`
      );
      const data = await response.json();

      setPreviousRaceResult(data);
      setLoadingPreviousRaceResult(false);
      fetchNextRaceData(data.MRData.RaceTable.round);
    };

    const fetchNextRaceData = async (round) => {
      const response = await fetch(`https://ergast.com/api/f1/current.json`);
      const data = await response.json();

      if (round >= data.MRData.RaceTable.Races.length) {
        setNextRaceData(null);
      } else {
        setNextRaceData(data.MRData.RaceTable.Races[parseInt(round)]);
      }

      setTotalNumberOfRaces(data.MRData.RaceTable.Races.length);
      setLoadingNextRaceData(false);
    };

    const fetchConstructorsStandings = async () => {
      const response = await fetch(
        `https://ergast.com/api/f1/current/constructorStandings.json`
      );
      const data = await response.json();

      setConstructorsStandings(
        data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      );
      setLoadingConstructorsStandings(false);
    };

    const fetchDriversStandings = async () => {
      const response = await fetch(
        `https://ergast.com/api/f1/current/driverStandings.json`
      );
      const data = await response.json();

      setDriversStandings(
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      );
      setLoadingDriversStandings(false);
    };

    fetchPreviousRaceResult();
    fetchDriversStandings();
    fetchConstructorsStandings();
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {" "}
          <h1 style={{ marginBottom: "3%" }}>
            {loadingNextRaceData
              ? ""
              : previousRaceResult.MRData.RaceTable.season}{" "}
            Formula One season{" "}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {loadingNextRaceData ? (
            <div>
              <p></p>
              <GenericCard
                cardTitle="Next Race"
                cardBody={<PuffLoader color="black" loading="true" size={30} />}
                cardHeight="24rem"
              />
              <p></p>
            </div>
          ) : nextRaceData == null ? (
            <div>
              <p></p>
              <GenericCard
                cardTitle="Next Race"
                cardBody={<h1>There's no upcoming events.</h1>}
                cardFooter={<h4>Please check back later</h4>}
                cardHeight="24rem"
                variant={"light"}
              />
              <p></p>
            </div>
          ) : (
            <div>
              <p></p>
              <NextRaceCard nextRaceData={nextRaceData} />
              <p></p>
            </div>
          )}
        </Col>
        <Col>
          {loadingPreviousRaceResult ? (
            <div>
              <p></p>
              <GenericCard
                cardTitle="Previous race"
                cardBody={<PuffLoader color="black" loading="true" size={30} />}
                cardHeight="24rem"
              />
              <p></p>
            </div>
          ) : (
            <div>
              <p></p>
              <PreviousRaceCard previousRaceData={previousRaceResult} />
              <p></p>
            </div>
          )}
        </Col>

        <Col>
          {!loadingPreviousRaceResult && !loadingNextRaceData ? (
            <div>
              <p></p>
              <PreviousRaceWinner
                previousRaceData={previousRaceResult}
                totalNumberOfRaces={totalNumberOfRaces}
              />
              <p></p>
            </div>
          ) : (
            <div>
              <p></p>
              <GenericCard
                cardTitle="Previous race winner"
                cardBody={<PuffLoader color="black" loading="true" size={30} />}
                cardHeight="24rem"
                variant={"primary"}
              />
              <p></p>
            </div>
          )}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <p></p>
          <StandingsCard
            type={"Drivers'"}
            standings={
              loadingDriversStandings ? (
                <Container>
                  <Row className="justify-content-md-center">
                    <PuffLoader color="black" loading="true" size={30} />
                  </Row>
                </Container>
              ) : (
                <DriversStandings
                  style={{
                    overflow: "hidden",
                    overflowY: "scroll",
                    height: "275px",
                  }}
                  driversStandings={driversStandings}
                />
              )
            }
          />
          <p></p>
        </Col>
        <Col>
          <p></p>
          <StandingsCard
            type={"Constructors'"}
            standings={
              loadingConstructorsStandings ? (
                <Container>
                  <Row className="justify-content-md-center">
                    <PuffLoader color="black" loading="true" size={30} />
                  </Row>
                </Container>
              ) : (
                <ConstructorsStandings
                  style={{
                    overflow: "hidden",
                    overflowY: "scroll",
                    height: "275px",
                  }}
                  constructorsStandings={constructorsStandings}
                />
              )
            }
          />
          <p></p>
        </Col>
      </Row>
    </Container>
  );
};

export default MainFeed;
