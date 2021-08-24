import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Countdown from "react-countdown";
import Tabs from "./Tabs";
import { Redirect } from "react-router-dom";

const RaceCountdown = ({ season, round }) => {
  const [raceInfo, setRaceInfo] = useState(null);
  const [loadingRaceInfo, setLoadingRaceInfo] = useState(true);

  useEffect(() => {
    const fetchRaceInfo = async () => {
      const response = await fetch(`http://ergast.com/api/f1/${season}.json`);
      const data = await response.json();

      if (data.MRData.RaceTable.Races[parseInt(round) - 1] === undefined) {
        setRaceInfo(null);
      } else {
        setRaceInfo({
          season: data.MRData.RaceTable.season,
          round: data.MRData.RaceTable.round,
          raceName: data.MRData.RaceTable.Races[parseInt(round) - 1].raceName,
          circuitId: data.MRData.RaceTable.Races[parseInt(round) - 1].Circuit.circuitId,
          circuitName:
            data.MRData.RaceTable.Races[parseInt(round) - 1].Circuit
              .circuitName,
          circuitCountry:
            data.MRData.RaceTable.Races[parseInt(round) - 1].Circuit.Location
              .country,
          circuitLocality:
            data.MRData.RaceTable.Races[parseInt(round) - 1].Circuit.Location
              .locality,
          circuitLatitude:
            data.MRData.RaceTable.Races[parseInt(round) - 1].Circuit.Location
              .lat,
          circuitLongitude:
            data.MRData.RaceTable.Races[parseInt(round) - 1].Circuit.Location
              .long,
          raceDate: data.MRData.RaceTable.Races[parseInt(round) - 1].date,
          raceTime: data.MRData.RaceTable.Races[
            parseInt(round) - 1
          ].hasOwnProperty("time")
            ? data.MRData.RaceTable.Races[parseInt(round) - 1].time.substring(
                0,
                data.MRData.RaceTable.Races[parseInt(round) - 1].time.length - 1
              )
            : "N/A",
        });
      }
      setLoadingRaceInfo(false);
    };

    fetchRaceInfo();
  }, [season, round]);

  return (
    <Container style={{ minHeight: "700px" }}>
      {loadingRaceInfo ? (
        ""
      ) : raceInfo === null ? (
        <Redirect to="/error" />
      ) : (
        <Container>
          <Tabs raceInfo={raceInfo} />
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1 style={{ fontSize: "100px" }}>
                <Countdown
                  date={
                    Date.now() +
                    (new Date(raceInfo.raceDate).getTime() +
                      raceInfo.raceTime.split(":")[0] * 3600000 -
                      new Date().getTime())
                  }
                />
              </h1>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default RaceCountdown;
