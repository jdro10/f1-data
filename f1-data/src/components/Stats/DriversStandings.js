import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Table.css";

const DriversStandings = () => {
  const [driversStandings, setDriversStandings] = useState(null);
  const [loadingDriversStandings, setLoadingDriversStandings] = useState(true);

  useEffect(() => {
    const fetchDriversStandings = async () => {
      const response = await fetch(
        `http://ergast.com/api/f1/current/driverStandings.json`
      );
      const data = await response.json();

      setDriversStandings(
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      );
      setLoadingDriversStandings(false);
    };

    fetchDriversStandings();
  }, []);

  return (
    <div className="table">
      {loadingDriversStandings ? (
        <Container>
        <Row className="justify-content-md-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
      ) : (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Position</th>
              <th>Number</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {driversStandings.map((driver, index) => (
              <tr key={index}>
                <td>{driver.position}</td>
                <td>{driver.Driver.permanentNumber}</td>
                <td>
                  {driver.Driver.givenName + " " + driver.Driver.familyName}
                </td>
                <td>{driver.wins}</td>
                <td>{driver.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default DriversStandings;
