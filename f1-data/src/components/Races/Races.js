import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RaceInfo from "./RaceInfo";
import Spinner from "react-bootstrap/Spinner";
import Dropdown from "react-bootstrap/Dropdown";
import "./Races.css";
import ListGroup from "react-bootstrap/ListGroup";

const Races = () => {
  const FIRST_SEASON = 1950;
  const [season, setSeason] = useState(
    sessionStorage.getItem("seasonScheduleInput") !== null
      ? sessionStorage.getItem("seasonScheduleInput")
      : "2021"
  );
  const [seasonSchedule, setSeasonSchedule] = useState(null);
  const [seasonsYearsList, setSeasonsYearsList] = useState(null);
  const [loadingSeasonSchedule, setLoadingSchedule] = useState(true);

  useEffect(() => {
    const seasonYear = localStorage.getItem("seasonSchedule" + season);

    const fetchSeasonSchedule = async () => {
      await fetch(`https://ergast.com/api/f1/${season}.json`)
        .then((res) => res.json())
        .then((result) => {
          setSeasonSchedule(result.MRData.RaceTable.Races);
          localStorage.setItem(
            "seasonSchedule" + season,
            JSON.stringify(result.MRData.RaceTable.Races)
          );
          setLoadingSchedule(false);
        });
    };

    if (seasonYear) {
      setSeasonSchedule(
        JSON.parse(localStorage.getItem("seasonSchedule" + season))
      );
      setLoadingSchedule(false);
    } else {
      fetchSeasonSchedule();
    }

    setSeasonsYearsList(
      Array("2021" - FIRST_SEASON + 1)
        .fill()
        .map((_, i) => FIRST_SEASON + i)
        .reverse()
    );
  }, [season]);

  const seasonYearChange = (text) => {
    setSeason(text);
    sessionStorage.setItem("seasonScheduleInput", text);
    setLoadingSchedule(true);
  };

  return (
    <Container>
      {loadingSeasonSchedule ? (
        <Container style={{ minHeight: "500px" }}>
          <Row className="justify-content-center text-center">
            <h1>FORMULA ONE</h1>
            <Spinner animation="border" />
          </Row>
        </Container>
      ) : (
        <Container style={{ minHeight: "500px" }}>
          <Row className="justify-content-center text-center">
            <Col>
              <h1>FORMULA ONE - {season} SEASON</h1>
            </Col>
          </Row>
          <Row
            className="justify-content-center text-center"
            style={{ marginBottom: "2%" }}
          >
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  {season}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  {seasonsYearsList.map((season, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={(e) => seasonYearChange(e.target.textContent)}
                    >
                      {season}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <ListGroup>
            {seasonSchedule.map((race, index) => (
              <ListGroup.Item key={index}>
                <RaceInfo race={race} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      )}
    </Container>
  );
};

export default Races;
