import React from "react";
import Table from "react-bootstrap/Table";
import { FaStopwatch } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Table.css";
import TeamColor from "../../TeamColor/TeamColor";

const RaceClassification = ({ raceClassification }) => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Pos</th>
            <th className="hideXS">Number</th>
            <th>Driver</th>
            <th className="hideXS">Team</th>
            <th className="hideXS">Laps</th>
            <th>Time/Retired</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {raceClassification.map((driver, index) => (
            <tr key={index}>
              <td>{driver.position}</td>
              <td className="hideXS">{driver.number}</td>
              <td>
                <Row className="row nopadding">
                  <Col xs={2} md={1} className="showXS">
                    <TeamColor
                      constructorId={driver.Constructor.constructorId}
                      height="45px"
                    />
                  </Col>
                  <Col xs={2} md={1} className="hideXS">
                    <TeamColor
                      constructorId={driver.Constructor.constructorId}
                    />
                  </Col>
                  <Col xs={6} md={11}>
                    {driver.Driver.givenName}{" "}
                    <b>{driver.Driver.familyName.toUpperCase()}</b>
                  </Col>
                </Row>
              </td>
              <td className="hideXS">{driver.Constructor.name}</td>
              <td className="hideXS">{driver.laps}</td>
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
