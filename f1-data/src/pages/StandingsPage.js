import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import ConstructorsStandings from "../components/Stats/Standings/ConstructorsStandings";
import DriversStandings from "../components/Stats/Standings/DriversStandings";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SyncLoader from "react-spinners/SyncLoader";

const StandingsPage = () => {
  const [season, setSeason] = useState("2021");
  const [driversStandings, setDriversStandings] = useState(null);
  const [constructorsStandings, setConstructorsStandings] = useState(null);
  const [loadingConstructorsStandings, setLoadingConstructorsStandings] =
    useState(true);
  const [loadingDriversStandings, setLoadingDriversStandings] = useState(true);

  useEffect(() => {
    const fetchConstructorsStandings = async () => {
      const response = await fetch(
        `http://ergast.com/api/f1/${season}/constructorStandings.json`
      );
      const data = await response.json();

      setConstructorsStandings(
        data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      );
      setLoadingConstructorsStandings(false);
    };

    const fetchDriversStandings = async () => {
      const response = await fetch(
        `http://ergast.com/api/f1/${season}/driverStandings.json`
      );
      const data = await response.json();

      setDriversStandings(
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      );
      setLoadingDriversStandings(false);
    };

    fetchConstructorsStandings();
    fetchDriversStandings();
  }, [season]);

  return (
    <div>
      <NavBar />
      {!loadingDriversStandings && !loadingDriversStandings ? (
        <Container style={{ minHeight: "700px" }}>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>2021 Formula One season</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
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
        <Container style={{minHeight: "700px"}}>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <SyncLoader color="black" loading="true" size={10} />
            </Col>
          </Row>
        </Container>
      )}
      <Footer />
    </div>
  );
};

export default StandingsPage;
