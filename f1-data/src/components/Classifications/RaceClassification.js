import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { FaStopwatch } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../SharedStyles/Table.css";
import TeamColor from "../TeamColor/TeamColor";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../helpers/ThemeContext";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};
const RaceClassification = ({ raceClassification }) => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  const rowClick = (driverId) => {
    history.push(`/driver/${driverId}`);
  };

  return (
    <>
      <Table
        className="table-hover table-striped standings-table"
        responsive="sm"
        style={{ overflow: "hidden", marginTop: "10px" }}
        variant={theme}
      >
        <thead>
          <tr>
            <th>POS</th>
            <th className="hideXS">NUMBER</th>
            <th>DRIVER</th>
            <th className="hideXS">TEAM</th>
            <th className="hideXS">LAPS</th>
            <th>TIME/RETIRED</th>
            <th>PTS</th>
            <th className="hideXS">+/-</th>
          </tr>
        </thead>

        <tbody>
          {raceClassification.map((driver, index) => (
            <tr
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => rowClick(driver.Driver.driverId)}
            >
              <td>{driver.position}</td>
              <td className="hideXS">{driver.number}</td>
              <td>
                <Row className="g-2">
                  <Col xs={1} className="showXS">
                    <TeamColor
                      constructorId={driver.Constructor.constructorId}
                      height="45px"
                    />
                  </Col>

                  <Col xs={1} className="hideXS">
                    <TeamColor
                      constructorId={driver.Constructor.constructorId}
                    />
                  </Col>

                  <Col xs={6} md={10}>
                    {driver.Driver.givenName}{" "}
                    <p style={boldFont}>
                      {driver.Driver.familyName.toUpperCase()}
                    </p>
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
                    <Col xs={2}>{driver.points}</Col>

                    <Col>
                      <FaStopwatch />
                    </Col>
                  </Row>
                </td>
              ) : (
                <td>{driver.points}</td>
              )}
              <td className="hideXS">
                {driver.grid === "0"
                  ? 20 - driver.position
                  : driver.grid - driver.position}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FaStopwatch /> - Fastest lap of the race
    </>
  );
};

export default RaceClassification;
