import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import EventTabs from "./EventTabs";
import { Redirect } from "react-router-dom";
import ClockCoutdown from "../../Countdown/ClockCountdown";

const RaceCountdown = ({ season, round }) => {
  const [raceInfo, setRaceInfo] = useState(null);
  const [raceQualifying, setRaceQualifying] = useState(null);
  const [loadingRaceInfo, setLoadingRaceInfo] = useState(true);
  const [loadingRaceQualifying, setLoadingRaceQualifying] = useState(true);

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
          }
        });

      setLoadingRaceQualifying(false);
    };

    fetchRaceInfo();
    fetchRaceQualifying();
  }, [season, round]);

  return (
    <div>
      <Container fluid="md" style={{ minHeight: "700px" }}>
        {loadingRaceInfo || loadingRaceQualifying ? null : raceInfo === null ? (
          <Redirect to="/error" />
        ) : (
          <div>
            <EventTabs
              season={season}
              round={round}
              raceInfo={raceInfo}
              raceQualifying={raceQualifying}
            />
            <Row className="justify-content-center text-center">
              <ClockCoutdown date={raceInfo.date} time={raceInfo.time} />
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default RaceCountdown;
