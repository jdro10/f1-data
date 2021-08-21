import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventTabs from "./EventTabs";

const RaceGeneralStats = ({ season, round }) => {
  const [raceInfo, setRaceInfo] = useState(null);
  const [raceClassification, setRaceClassification] = useState(null);
  const [loadingRaceResult, setLoadingRaceResult] = useState(true);

  useEffect(() => {
    const fetchRaceResult = async () => {
      const response = await fetch(
        `http://ergast.com/api/f1/${season}/${round}/results.json`
      );
      const data = await response.json();

      setRaceInfo({
        season: data.MRData.RaceTable.season,
        round: data.MRData.RaceTable.round,
        raceName: data.MRData.RaceTable.Races[0].raceName,
        circuitName: data.MRData.RaceTable.Races[0].Circuit.circuitName,
        circuitCountry: data.MRData.RaceTable.Races[0].Circuit.Location.country,
        circuitLocality: data.MRData.RaceTable.Races[0].Circuit.Location.locality,
        circuitLatitude: data.MRData.RaceTable.Races[0].Circuit.Location.lat,
        circuitLongitude: data.MRData.RaceTable.Races[0].Circuit.Location.long,
        raceDate: data.MRData.RaceTable.Races[0].date,
        raceTime: data.MRData.RaceTable.Races[0].time,
      });

      setRaceClassification(data.MRData.RaceTable.Races[0].Results);
      setLoadingRaceResult(false);
    };

    fetchRaceResult();
  }, [season, round]);

  return (
    <div>
      <Container fluid="md">
        {loadingRaceResult ? (
          <p>loading</p>
        ) : (
          <Container>
            <EventTabs
              raceInfo={raceInfo}
              raceClassification={raceClassification}
            />
          </Container>
        )}
      </Container>
    </div>
  );
};

export default RaceGeneralStats;
