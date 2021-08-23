import React from "react";
import Table from "react-bootstrap/Table";
import Flag from "react-world-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";

const DriversStandings = ({ style, driversStandings }) => {
  return (
    <div style={style}>
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
    </div>
  );
};

export default DriversStandings;
