import React, { useState, useEffect } from "react";
import ConstructorsStandings from "./ConstructorsStandings";
import DriversStandings from "./DriversStandings";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Dropdown from "react-bootstrap/Dropdown";
import { config } from "../../data/config";

const Standings = () => {
  const [season, setSeason] = useState(
    sessionStorage.getItem("seasonStandingsInput") !== null
      ? sessionStorage.getItem("seasonStandingsInput")
      : config.current_season
  );
  const [seasonsYearsList, setSeasonsYearsList] = useState(null);
  const [driversStandings, setDriversStandings] = useState(null);
  const [constructorsStandings, setConstructorsStandings] = useState(null);
  const [loadingDriversStandings, setLoadingDriversStandings] = useState(true);
  const [loadingConstructorsStandings, setLoadingConstructorsStandings] = useState(true);

  useEffect(() => {
    const fetchConstructorsStandings = async () => {
      setLoadingConstructorsStandings(true);
      await fetch(`https://ergast.com/api/f1/${season}/constructorStandings.json`)
        .then((res) => res.json())
        .then((result) => {
          if (result.MRData.StandingsTable.StandingsLists[0] !== undefined) {
            setConstructorsStandings(result.MRData.StandingsTable.StandingsLists[0]);
          } else {
            setConstructorsStandings({});
          }
        });

      setLoadingConstructorsStandings(false);
    };

    const fetchDriversStandings = async () => {
      setLoadingDriversStandings(true);
      await fetch(`https://ergast.com/api/f1/${season}/driverStandings.json?limit=50`)
        .then((res) => res.json())
        .then((result) => {
          if (result.MRData.StandingsTable.StandingsLists[0] !== undefined) {
            setDriversStandings(result.MRData.StandingsTable.StandingsLists[0].DriverStandings);
          }
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
    fillArrayBetweenTwoNumbers(config.first_season, config.current_season);
  }, [season]);

  const seasonYearChange = (text) => {
    setLoadingConstructorsStandings(true);
    setSeason(text);
    sessionStorage.setItem("seasonStandingsInput", text);
  };

  return (
    <Container style={{ minHeight: "600px" }}>
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
          <Row className="justify-content-center text-center" style={{ marginBottom: "5px" }}>
            <Col>
              <Dropdown>
                <Dropdown.Toggle className="main-btn" id="dropdown-basic" variant="secondary">
                  {season}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ maxHeight: "500px", overflowY: "scroll" }}>
                  {seasonsYearsList.map((season, index) => (
                    <Dropdown.Item key={index} onClick={(e) => seasonYearChange(e.target.textContent)}>
                      {season}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          {driversStandings !== null ? (
            <>
              <ul className="nav nav-pills nav-fill mb-2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="driver-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#driver"
                    type="button"
                    role="tab"
                    aria-controls="driver"
                    aria-selected="true"
                  >
                    DRIVERS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="constructor-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#constructor"
                    type="button"
                    role="tab"
                    aria-controls="constructor"
                    aria-selected="false"
                  >
                    CONSTRUCTORS
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="driver" role="tabpanel" aria-labelledby="driver-tab">
                  <DriversStandings driversStandings={driversStandings} />
                </div>
                <div className="tab-pane fade" id="constructor" role="tabpanel" aria-labelledby="constructor-tab">
                  <ConstructorsStandings
                    constructorsStandings={constructorsStandings.ConstructorStandings}
                    constructorSeason={constructorsStandings.season}
                    showEngine={true}
                  />
                </div>
              </div>
            </>
          ) : (
            <Row className="justify-content-center text-center">
              <h2>{season} standings are not available.</h2>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default Standings;
