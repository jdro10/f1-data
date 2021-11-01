import React, { useState, useEffect } from "react";
import ConstructorsStandings from "./ConstructorsStandings";
import DriversStandings from "./DriversStandings";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Dropdown from "react-bootstrap/Dropdown";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Standings = () => {
  const FIRST_SEASON = 1950;
  const [season, setSeason] = useState(
    sessionStorage.getItem("seasonStandingsInput") !== null
      ? sessionStorage.getItem("seasonStandingsInput")
      : "2021"
  );
  const [seasonsYearsList, setSeasonsYearsList] = useState(null);
  const [driversStandings, setDriversStandings] = useState(null);
  const [constructorsStandings, setConstructorsStandings] = useState(null);
  const [loadingDriversStandings, setLoadingDriversStandings] = useState(true);
  const [loadingConstructorsStandings, setLoadingConstructorsStandings] =
    useState(true);

  useEffect(() => {
    const fetchConstructorsStandings = async () => {
      setLoadingConstructorsStandings(true);
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

      setLoadingConstructorsStandings(false);
    };

    const fetchDriversStandings = async () => {
      setLoadingDriversStandings(true);
      await fetch(
        `https://ergast.com/api/f1/${season}/driverStandings.json?limit=50`
      )
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
    setLoadingConstructorsStandings(true);
    setSeason(text);
    sessionStorage.setItem("seasonStandingsInput", text);
  };

  return (
    <Container style={{ minHeight: "500px" }}>
      {loadingConstructorsStandings || loadingDriversStandings ? (
        <Row className="justify-content-center text-center">
          <h1>{season} FORMULA 1</h1>
          <Spinner animation="border" />
        </Row>
      ) : (
        <>
          <Row className="justify-content-center text-center">
            <Col>
              <h1>{season} FORMULA 1</h1>
            </Col>
          </Row>
          <Row
            className="justify-content-center text-center"
            style={{ marginBottom: "5px" }}
          >
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="danger"
                  className="red-btn"
                  id="dropdown-basic"
                >
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

          <Tabs
            defaultActiveKey="drivers"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab tabClassName="tab-style" eventKey="drivers" title="DRIVERS">
              <DriversStandings driversStandings={driversStandings} />
            </Tab>
            <Tab
              tabClassName="tab-style"
              eventKey="constructors"
              title="CONSTRUCTORS"
              style={{ minHeight: "500px" }}
            >
              <ConstructorsStandings
                constructorsStandings={constructorsStandings}
                season={season}
              />
            </Tab>
          </Tabs>
        </>
      )}
    </Container>
  );
};

export default Standings;
