import React from "react";
import Table from "react-bootstrap/Table";
import { FaStopwatch } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Table.css";
import { TeamColors } from "../../../data/TeamColors";

const RaceClassification = ({ raceClassification }) => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Pos</th>
            <th className="hideSM">Number</th>
            <th>Driver</th>
            <th className="hideSM">Team</th>
            <th className="hideSM">Laps</th>
            <th>Time/Retired</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {raceClassification.map((driver, index) => (
            <tr key={index}>
              <td>{driver.position}</td>
              <td className="hideSM">{driver.number}</td>
              <td>
                <Row className="row nopadding">
                  <Col xs={2}>
                    <div
                      style={{
                        width: "7px",
                        height: "25px",
                        backgroundColor:
                          TeamColors.hasOwnProperty(driver.Constructor.constructorId)
                            ? TeamColors[driver.Constructor.constructorId]
                            : '#000000',
                      }}
                    />
                  </Col>
                  <Col xs={6}>
                    {driver.Driver.givenName + " " + driver.Driver.familyName}
                  </Col>
                </Row>
              </td>

              <td className="hideSM">{driver.Constructor.name}</td>
              <td className="hideSM">{driver.laps}</td>
              <td>
                {driver.Time !== undefined
                  ? driver.status === "Finished"
                    ? driver.Time.time
                    : driver.status
                  : driver.status}
              </td>
              {driver.FastestLap && driver.FastestLap.rank === "1" ? (
                <td>
                  <Row>
                    <Col>{driver.points}</Col>
                    <Col>
                      <FaStopwatch />
                    </Col>
                  </Row>
                </td>
              ) : (
                <td>{driver.points}</td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <p>
        <FaStopwatch /> - Fastest lap of the race
      </p>
    </div>
  );
};

export default RaceClassification;