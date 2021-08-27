import React from "react";
import Table from "react-bootstrap/Table";
import "../Styles/Table.css";

const RaceQualifying = ({ raceQualifying }) => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Pos</th>
            <th className="hideSM">Number</th>
            <th>Driver</th>
            <th className="hideSM">Team</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
          </tr>
        </thead>
        <tbody>
          {raceQualifying.map((driver, index) => (
            <tr key={index}>
              <td>{driver.position}</td>
              <td className="hideSM">{driver.number}</td>
              <td className="hideSM">
                {driver.Driver.givenName + " " + driver.Driver.familyName}
              </td>
              {!driver.Driver.hasOwnProperty("code") ? (
                <td className="showSM">
                  {driver.Driver.givenName + " " + driver.Driver.familyName}
                </td>
              ) : (
                <td className="showSM">{driver.Driver.code}</td>
              )}
              <td className="hideSM">{driver.Constructor.name}</td>
              <td>{driver.hasOwnProperty("Q1") ? driver.Q1 : "-"}</td>
              <td>{driver.hasOwnProperty("Q2") ? driver.Q2 : "-"}</td>
              <td>{driver.hasOwnProperty("Q3") ? driver.Q3 : "-"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RaceQualifying;
