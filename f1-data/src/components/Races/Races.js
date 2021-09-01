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
  const [season, setSeason] = useState("2021");
  const [seasonSchedule, setSeasonSchedule] = useState(null);
  const [seasonsYearsList, setSeasonsYearsList] = useState(null);
  const [loadingSeasonSchedule, setLoadingSchedule] = useState(true);

  useEffect(() => {
    const fetchSeasonSchedule = async () => {
      const response = await fetch(`https://ergast.com/api/f1/${season}.json`);
      const data = await response.json();

      setSeasonSchedule(data.MRData.RaceTable.Races);
      setLoadingSchedule(false);
    };

    function fillArrayBetweenTwoNumbers(start, end) {
      setSeasonsYearsList(
        Array(end - start + 1)
          .fill()
          .map((_, i) => start + i)
          .reverse()
      );
    }

    fetchSeasonSchedule();
    fillArrayBetweenTwoNumbers(FIRST_SEASON, new Date().getFullYear());
  }, [season]);

  const seasonYearChange = (text) => {
    setSeason(text);
    setLoadingSchedule(true);
  };

  return (
    <Container>
      {loadingSeasonSchedule ? (
        <Container style={{ marginTop: "10%", minHeight: "700px" }}>
          <Row className="justify-content-center text-center">
            <Spinner animation="border" />
          </Row>
        </Container>
      ) : (
        <Container style={{ marginTop: "2%", minHeight: "700px" }}>
          <Row className="justify-content-center text-center">
            <Col>
              <h1>Formula One - {season} season</h1>
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
