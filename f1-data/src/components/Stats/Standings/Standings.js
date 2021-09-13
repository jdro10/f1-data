import React, { useState, useEffect } from "react";
import ConstructorsStandings from "./ConstructorsStandings";
import DriversStandings from "./DriversStandings";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Dropdown from "react-bootstrap/Dropdown";

const Standings = () => {
  const FIRST_SEASON = 1950;
  const [season, setSeason] = useState("2021");
  const [seasonsYearsList, setSeasonsYearsList] = useState(null);
  const [driversStandings, setDriversStandings] = useState(null);
  const [constructorsStandings, setConstructorsStandings] = useState(null);
  const [loadingTeamsStandings, setLoadingTeamsStandings] = useState(true);
  const [loadingDriversStandings, setLoadingDriversStandings] = useState(true);

  useEffect(() => {
    const fetchConstructorsStandings = async () => {
      setLoadingTeamsStandings(true);
      await fetch(
        `https://ergast.com/api/f1/${season}/constructorStandings.json`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.MRData.StandingsTable.StandingsLists[0] !== undefined) {
            setConstructorsStandings(
              result.MRData.StandingsTable.StandingsLists[0]
                .ConstructorStandings
            );
          } else {
            setConstructorsStandings(null);
          }
        });

      setLoadingTeamsStandings(false);
    };

    const fetchDriversStandings = async () => {
      setLoadingDriversStandings(true);
      await fetch(`https://ergast.com/api/f1/${season}/driverStandings.json`)
        .then((res) => res.json())
        .then((result) => {
          setDriversStandings(
            result.MRData.StandingsTable.StandingsLists[0].DriverStandings
          );
          setLoadingDriversStandings(false);
        });
    };

    const fillArrayBetweenTwoNumbers = (start, end) => {
      setSeasonsYearsList(
        Array(end - start + 1)
          .fill()
          .map((_, i) => start + i)
          .reverse()
      );
    };

    fetchConstructorsStandings();
    fetchDriversStandings();
    fillArrayBetweenTwoNumbers(FIRST_SEASON, new Date().getFullYear());
  }, [season]);

  const seasonYearChange = (text) => {
    setSeason(text);
  };

  return (
    <Container>
      {loadingTeamsStandings || loadingDriversStandings ? (
        <Container style={{ minHeight: "500px" }}>
          <Row className="justify-content-center text-center">
            <h1 style={{ marginBottom: "3%" }}>FORMULA ONE</h1>
            <Spinner animation="border" />
          </Row>
        </Container>
      ) : (
        <Container style={{ minHeight: "700px" }}>
          <Row className="justify-content-center text-center">
            <Col>
              <h1>{season} FORMULA ONE</h1>
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
                <Dropdown.Menu
                  style={{ maxHeight: "500px", overflowY: "scroll" }}
                >
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
          <Row className="justify-content-center text-center">
            <Col md="auto">
              <h2>CONSTRUCTORS' STANDINGS</h2>
            </Col>
            <Row>
              <Col>
                <ConstructorsStandings
                  constructorsStandings={constructorsStandings}
                />
              </Col>
            </Row>
            <Col md="auto">
              <h2>DRIVERS' STANDINGS</h2>
            </Col>
            <Row>
              <Col>
                <DriversStandings driversStandings={driversStandings} />
              </Col>
            </Row>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default Standings;
