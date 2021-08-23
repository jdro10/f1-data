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
import GeneralInfoCard from "../MainFeed/GeneralInfoCard";
import StandingsCard from "./StandingsCard";
import SyncLoader from "react-spinners/SyncLoader";

const MainFeed = () => {
  const [nextRaceData, setNextRaceData] = useState(null);
  const [previousRaceResult, setPreviousRaceResult] = useState(null);
  const [totalNumberOfRaces, setTotalNumberOfRaces] = useState(null);
  const [loadingNextRaceData, setLoadingNextRaceData] = useState(true);
  const [loadingPreviousRaceResult, setLoadingPreviousRaceResult] =
    useState(true);

  useEffect(() => {
    const fetchPreviousRaceResult = async () => {
      const response = await fetch(
        `http://ergast.com/api/f1/current/last/results.json`
      );
      const data = await response.json();

      setPreviousRaceResult({
        season: data.MRData.RaceTable.season,
        round: data.MRData.RaceTable.round,
        raceName: data.MRData.RaceTable.Races[0].raceName,
        date: data.MRData.RaceTable.Races[0].date,
        time: data.MRData.RaceTable.Races[0].time.substring(
          0,
          data.MRData.RaceTable.Races[0].time.length - 1
        ),
        circuitCountryCode: await fetchCountryCode(
          data.MRData.RaceTable.Races[0].Circuit.Location.country
        ),
        circuitName: data.MRData.RaceTable.Races[0].Circuit.circuitName,
      });

      setLoadingPreviousRaceResult(false);
      fetchNextRaceData(data.MRData.RaceTable.round);
    };

    const fetchNextRaceData = async (round) => {
      const response = await fetch(`http://ergast.com/api/f1/current.json`);
      const data = await response.json();

      setNextRaceData({
        season: data.MRData.RaceTable.season,
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

    fetchPreviousRaceResult();
  }, []);

  const fetchCountryCode = async (circuitCountry) => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${circuitCountry}?fullText=true`
    );
    const data = await response.json();

    return data[0].alpha3Code;
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {" "}
          <h1 style={{ marginBottom: "3%" }}>
            {loadingNextRaceData ? "" : nextRaceData.season} Formula One season{" "}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {loadingPreviousRaceResult ? (
            <GenericCard
              cardTitle="Previous race"
              cardBody={<SyncLoader color="black" loading="true" size={10} />}
              cardFooter={<SyncLoader color="black" loading="true" size={10} />}
              cardHeight="18rem"
            />
          ) : (
            <PreviousRaceCard previousRaceData={previousRaceResult} />
          )}
        </Col>
        <Col>
          {loadingNextRaceData ? (
            <GenericCard
              cardTitle="Next Race"
              cardBody={<SyncLoader color="black" loading="true" size={10} />}
              cardFooter={<SyncLoader color="black" loading="true" size={10} />}
              cardHeight="18rem"
            />
          ) : (
            <NextRaceCard nextRaceData={nextRaceData} />
          )}
        </Col>
        <Col>
          {!loadingPreviousRaceResult && !loadingNextRaceData ? (
            <GeneralInfoCard
              previousRaceData={previousRaceResult}
              nextRaceData={nextRaceData}
              totalNumberOfRaces={totalNumberOfRaces}
            />
          ) : (
            <GenericCard
              cardTitle="Round"
              cardBody={<SyncLoader color="black" loading="true" size={10} />}
              cardFooter={<SyncLoader color="black" loading="true" size={10} />}
              cardHeight="18rem"
            />
          )}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <StandingsCard standings={<DriversStandings />} />
        </Col>
        <Col>
          <StandingsCard standings={<ConstructorsStandings />} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainFeed;
