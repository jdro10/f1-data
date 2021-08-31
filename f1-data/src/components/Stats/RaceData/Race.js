import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import EventTabs from "./EventTabs";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import RaceCountdown from "./RaceCountdown";

const Race = ({ season, round }) => {
  const [raceInfo, setRaceInfo] = useState(null);
  const [raceClassification, setRaceClassification] = useState(null);
  const [raceQualifying, setRaceQualifying] = useState(null);
  const [loadingRaceResult, setLoadingRaceResult] = useState(true);
  const [loadingRaceQualifying, setLoadingRaceQualifying] = useState(true);

  useEffect(() => {
    const fetchRaceResult = async () => {
      const response = await fetch(
        `https://ergast.com/api/f1/${season}/${round}/results.json`
      );
      const data = await response.json();

      if (data.MRData.RaceTable.Races[0] !== undefined) {
        setRaceInfo(data.MRData.RaceTable.Races[0]);
        setRaceClassification(data.MRData.RaceTable.Races[0].Results);
      }

      setLoadingRaceResult(false);
    };

    const fetchRaceQualifying = async () => {
      const response = await fetch(
        `https://ergast.com/api/f1/${season}/${round}/qualifying.json`
      );
      const data = await response.json();

      if (data.MRData.RaceTable.Races[0] !== undefined) {
        setRaceQualifying(data.MRData.RaceTable.Races[0].QualifyingResults);
      }

      setLoadingRaceQualifying(false);
    };

    fetchRaceResult();
    fetchRaceQualifying();
  }, [season, round]);

  return (
    <div>
      <Container fluid="md">
        {loadingRaceResult || loadingRaceQualifying ? (
          <Container style={{ marginTop: "5%", minHeight: "700px" }}>
            <Row className="justify-content-center text-center">
              <Spinner animation="border" />
            </Row>
          </Container>
        ) : raceClassification == null ? (
          <RaceCountdown season={season} round={round} />
        ) : (
          <Container>
            <EventTabs
              raceInfo={raceInfo}
              raceClassification={raceClassification}
              raceQualifying={raceQualifying}
            />
          </Container>
        )}
      </Container>
    </div>
  );
};

export default Race;
