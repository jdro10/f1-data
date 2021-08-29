import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Countdown from "react-countdown";
import EventTabs from "./EventTabs";
import { Redirect } from "react-router-dom";
import "../Styles/RaceCountdown.css";

const RaceCountdown = ({ season, round }) => {
  const [raceInfo, setRaceInfo] = useState(null);
  const [loadingRaceInfo, setLoadingRaceInfo] = useState(true);

  useEffect(() => {
    const fetchRaceInfo = async () => {
      const response = await fetch(`https://ergast.com/api/f1/${season}.json`);
      const data = await response.json();

      if (data.MRData.RaceTable.Races[parseInt(round) - 1] !== undefined) {
        setRaceInfo(data.MRData.RaceTable.Races[parseInt(round) - 1]);
      }

      setLoadingRaceInfo(false);
    };

    fetchRaceInfo();
  }, [season, round]);

  return (
    <div>
      <Container fluid="md" style={{ minHeight: "700px" }}>
        {loadingRaceInfo ? (
          ""
        ) : raceInfo === null ? (
          <Redirect to="/error" />
        ) : (
          <div>
            <EventTabs season={season} round={round} raceInfo={raceInfo} />
            <Row className="justify-content-center text-center">
              <Col>
                <h1 className="countdown">
                  <Countdown
                    date={
                      Date.now() +
                      (new Date(raceInfo.date).getTime() +
                        raceInfo.time.split(":")[0] * 3600000 -
                        new Date().getTime())
                    }
                  />
                </h1>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default RaceCountdown;
