import React, { useState, useEffect } from "react";
import ConstructorsStandings from "./ConstructorsStandings";
import DriversStandings from "./DriversStandings";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PuffLoader from "react-spinners/PuffLoader";
import Dropdown from "react-bootstrap/Dropdown";

const Standings = () => {
  const FIRST_SEASON = 1950;
  const [season, setSeason] = useState("2021");
  const [seasonsYearsList, setSeasonsYearsList] = useState(null);
  const [driversStandings, setDriversStandings] = useState(null);
  const [constructorsStandings, setConstructorsStandings] = useState(null);
  const [loadingConstructorsStandings, setLoadingConstructorsStandings] =
    useState(true);
  const [loadingDriversStandings, setLoadingDriversStandings] = useState(true);

  useEffect(() => {
    const fetchConstructorsStandings = async () => {
      setLoadingConstructorsStandings(true);
      const response = await fetch(
        `https://ergast.com/api/f1/${season}/constructorStandings.json`
      );
      const data = await response.json();

      if (data.MRData.StandingsTable.StandingsLists[0] !== undefined) {
        setConstructorsStandings(
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        );
      } else {
        setConstructorsStandings(null);
      }

      setLoadingConstructorsStandings(false);
    };

    const fetchDriversStandings = async () => {
      setLoadingDriversStandings(true);
      const response = await fetch(
        `https://ergast.com/api/f1/${season}/driverStandings.json`
      );
      const data = await response.json();

      setDriversStandings(
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      );
      setLoadingDriversStandings(false);
    };

    function fillArrayBetweenTwoNumbers(start, end) {
      setSeasonsYearsList(
        Array(end - start + 1)
          .fill()
          .map((_, i) => start + i)
          .reverse()
      );
    }

    fetchConstructorsStandings();
    fetchDriversStandings();
    fillArrayBetweenTwoNumbers(FIRST_SEASON, new Date().getFullYear());
  }, [season]);

  const seasonYearChange = (text) => {
    setSeason(text);
  };
  return (
    <div>
      {!loadingConstructorsStandings && !loadingDriversStandings ? (
        <Container style={{ minHeight: "700px" }}>
          <Row className="justify-content-center text-center">
            <Col>
              <h1>{season} Formula One season</h1>
            </Col>
          </Row>
          <Row className="justify-content-center text-center" style={{ marginBottom: "2%" }}>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
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
              <h1>Constructors' standings</h1>
            </Col>
            <Row>
              <Col>
                <ConstructorsStandings
                  constructorsStandings={constructorsStandings}
                />
              </Col>
            </Row>
            <Col md="auto">
              <h1>Drivers' standings</h1>
            </Col>
            <Row>
              <Col>
                <DriversStandings driversStandings={driversStandings} />
              </Col>
            </Row>
          </Row>
        </Container>
      ) : (
        <Container style={{ minHeight: "500px", marginTop: "7%" }}>
          <Row className="justify-content-center text-center">
              <PuffLoader color="black" loading="true" size={50} />
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Standings;
