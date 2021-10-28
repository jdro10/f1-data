import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Event from "./Event";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import FutureRace from "./FutureRace";

const Race = ({ season, round }) => {
  const [raceInfo, setRaceInfo] = useState(null);
  const [raceClassification, setRaceClassification] = useState(null);
  const [qualifying, setQualifying] = useState(null);
  const [loadingRaceResult, setLoadingRaceResult] = useState(true);
  const [loadingQualifying, setLoadingQualifying] = useState(true);

  useEffect(() => {
    const fetchRaceResult = async () => {
      await fetch(`https://ergast.com/api/f1/${season}/${round}/results.json`)
        .then((res) => res.json())
        .then((result) => {
          if (result.MRData.RaceTable.Races[0] !== undefined) {
            setRaceInfo(result.MRData.RaceTable.Races[0]);
            setRaceClassification(result.MRData.RaceTable.Races[0].Results);
          }
        });

      setLoadingRaceResult(false);
    };

    const fetchRaceQualifying = async () => {
      await fetch(
        `https://ergast.com/api/f1/${season}/${round}/qualifying.json`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.MRData.RaceTable.Races[0] !== undefined) {
            setQualifying(result.MRData.RaceTable.Races[0].QualifyingResults);
          }
        });

      setLoadingQualifying(false);
    };

    fetchRaceResult();
    fetchRaceQualifying();
  }, [season, round]);

  return (
    <div>
      <Container fluid="md">
        {loadingRaceResult || loadingQualifying ? (
          <Container style={{ marginTop: "5%", minHeight: "500px" }}>
            <Row className="justify-content-center text-center">
              <Spinner animation="border" />
            </Row>
          </Container>
        ) : raceClassification == null ? (
          <FutureRace season={season} round={round} />
        ) : (
          <Event
            raceInfo={raceInfo}
            raceClassification={raceClassification}
            qualifyingClassification={qualifying}
          />
        )}
      </Container>
    </div>
  );
};

export default Race;
