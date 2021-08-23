import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SyncLoader from "react-spinners/SyncLoader";
import "./Table.css";
import Flag from "react-world-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";

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
    console.log();
  }, []);

  return (
    <div className="table">
      {loadingDriversStandings ? (
        <Container>
          <Row className="justify-content-md-center">
            <SyncLoader color="black" loading="true" size={10} />
          </Row>
        </Container>
      ) : (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Position</th>
              <th>Nationality</th>
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
                <td>
                  <Flag
                    code={CountriesCodeNationality[driver.Driver.nationality]}
                    height="15"
                    width="25"
                  />
                </td>
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
