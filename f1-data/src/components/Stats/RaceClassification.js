import React from "react";
import Table from "react-bootstrap/Table";

const RaceClassification = ({ raceClassification }) => {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Number</th>
          <th>Driver</th>
          <th>Team</th>
          <th>Laps</th>
          <th>Time/Retired</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {raceClassification.map((driver, index) => (
          <tr key={index}>
            <td>{driver.position}</td>
            <td>{driver.number}</td>
            <td>{driver.Driver.givenName + " " + driver.Driver.familyName}</td>
            <td>{driver.Constructor.name}</td>
            <td>{driver.laps}</td>
            <td>
              {driver.status === "Finished" ? driver.Time.time : driver.status}
            </td>
            <td>{driver.points}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RaceClassification;
