import React from "react";
import Table from "react-bootstrap/Table";

const RaceQualifying = ({ raceQualifying }) => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Number</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
          </tr>
        </thead>
        <tbody>
          {raceQualifying.map((driver, index) => (
            <tr key={index}>
              <td>{driver.position}</td>
              <td>{driver.number}</td>
              <td>
                {driver.Driver.givenName + " " + driver.Driver.familyName}
              </td>
              <td>{driver.Constructor.name}</td>
              <td>{driver.Q1}</td>
              <td>{driver.Q2}</td>
              <td>{driver.Q3}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RaceQualifying;
