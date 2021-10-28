import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Event from "./Event";
import { Redirect } from "react-router-dom";

const FutureRace = ({ season, round }) => {
  const [raceInfo, setRaceInfo] = useState(null);
  const [qualifying, setQualifying] = useState(null);
  const [loadingRaceInfo, setLoadingRaceInfo] = useState(true);
  const [loadingQualifying, setLoadingQualifying] = useState(true);

  useEffect(() => {
    const fetchRaceInfo = async () => {
      await fetch(`https://ergast.com/api/f1/${season}.json`)
        .then((res) => res.json())
        .then((result) => {
          if (
            result.MRData.RaceTable.Races[parseInt(round) - 1] !== undefined
          ) {
            setRaceInfo(result.MRData.RaceTable.Races[parseInt(round) - 1]);
          }
        });

      setLoadingRaceInfo(false);
    };

    const fetchQualifying = async () => {
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

    fetchRaceInfo();
    fetchQualifying();
  }, [season, round]);

  return (
    <div>
      <Container fluid="md" style={{ minHeight: "500px" }}>
        {loadingRaceInfo || loadingQualifying ? null : raceInfo === null ? (
          <Redirect to="/error" />
        ) : (
          <div>
            <Event
              season={season}
              round={round}
              raceInfo={raceInfo}
              qualifyingClassification={qualifying}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default FutureRace;
