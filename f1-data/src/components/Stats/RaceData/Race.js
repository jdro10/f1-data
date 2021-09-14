import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import EventTabs from "./EventTabs";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import FutureRace from "./FutureRace";

const Race = ({ season, round }) => {
  const [raceInfo, setRaceInfo] = useState(null);
  const [raceClassification, setRaceClassification] = useState(null);
  const [raceQualifying, setRaceQualifying] = useState(null);
  const [loadingRaceResult, setLoadingRaceResult] = useState(true);
  const [loadingRaceQualifying, setLoadingRaceQualifying] = useState(true);

  useEffect(() => {
    const storedRaceResult = localStorage.getItem(`race${season}/${round}`);
    const storedQualifyingResult = localStorage.getItem(
      `qualifying${season}/${round}`
    );

    const fetchRaceResult = async () => {
      await fetch(`https://ergast.com/api/f1/${season}/${round}/results.json`)
        .then((res) => res.json())
        .then((result) => {
          if (result.MRData.RaceTable.Races[0] !== undefined) {
            setRaceInfo(result.MRData.RaceTable.Races[0]);
            setRaceClassification(result.MRData.RaceTable.Races[0].Results);
            localStorage.setItem(
              `race${season}/${round}`,
              JSON.stringify(result.MRData.RaceTable.Races[0])
            );
            localStorage.setItem(
              `raceClassification${season}/${round}`,
              JSON.stringify(result.MRData.RaceTable.Races[0].Results)
            );
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
            setRaceQualifying(
              result.MRData.RaceTable.Races[0].QualifyingResults
            );
            localStorage.setItem(
              `qualifying${season}/${round}`,
              JSON.stringify(result.MRData.RaceTable.Races[0].QualifyingResults)
            );
          }
        });

      setLoadingRaceQualifying(false);
    };

    if (storedRaceResult && storedQualifyingResult) {
      setRaceInfo(JSON.parse(localStorage.getItem(`race${season}/${round}`)));
      setRaceClassification(
        JSON.parse(localStorage.getItem(`raceClassification${season}/${round}`))
      );
      setRaceQualifying(
        JSON.parse(localStorage.getItem(`qualifying${season}/${round}`))
      );
      setLoadingRaceResult(false);
      setLoadingRaceQualifying(false);
    } else {
      fetchRaceResult();
      fetchRaceQualifying();
    }
  }, [season, round]);

  return (
    <div>
      <Container fluid="md">
        {loadingRaceResult || loadingRaceQualifying ? (
          <Container style={{ marginTop: "5%", minHeight: "500px" }}>
            <Row className="justify-content-center text-center">
              <Spinner animation="border" />
            </Row>
          </Container>
        ) : raceClassification == null ? (
          <FutureRace season={season} round={round} />
        ) : (
          <EventTabs
            raceInfo={raceInfo}
            raceClassification={raceClassification}
            raceQualifying={raceQualifying}
          />
        )}
      </Container>
    </div>
  );
};

export default Race;
