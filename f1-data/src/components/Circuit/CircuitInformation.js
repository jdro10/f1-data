import React, { useContext } from "react";
import TeamColor from "../TeamColor/TeamColor";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../helpers/ThemeContext";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};

const CircuitInformation = ({ firstGP, lastGP, fastestLap }) => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  const driverRowClick = (driverId) => {
    history.push(`/driver/${driverId}`);
  };

  const constructorRowClick = (wikiConstructorLink) => {
    window.open(wikiConstructorLink, "_blank");
  };

  const calculateCircuitLength = (speed, time) => {
    const timeSplitted = time.split(":");
    const secondsSplitted = time.split(".");

    const timeInSeconds =
      parseInt(timeSplitted[0] * 60) +
      parseInt(timeSplitted[1]) +
      parseFloat(secondsSplitted[1] / 1000);

    const metersPerSecond = (parseFloat(speed) * 1000) / 3600;
    const length = (metersPerSecond * timeInSeconds) / 1000;

    return Math.round(length * 1000) / 1000;
  };

  return (
    <Table
      responsive
      className="standings-table table-striped table-hover"
      variant={theme}
      style={{ marginTop: "15px" }}
    >
      <tbody>
        <tr>
          <td className="row-stats align-middle">First grand prix</td>
          <td className="row-stats text-end">
            {firstGP.season} {firstGP.raceName}
          </td>
        </tr>
        {fastestLap === undefined ? null : (
          <>
            <tr>
              <td className="row-stats">Current layout length</td>
              <td className="text-end row-stats">
                {calculateCircuitLength(
                  parseFloat(lastGP.Results[0].FastestLap.AverageSpeed.speed),
                  lastGP.Results[0].FastestLap.Time.time
                )}{" "}
                km
              </td>
            </tr>
            <tr>
              <td className="row-stats">Lap record (All track layouts)</td>
              <td className="text-end row-stats">
                {fastestLap.Results[0].FastestLap.Time.time} (
                {fastestLap.season})
              </td>
            </tr>
            <tr>
              <td className="row-stats">Average speed</td>
              <td className="text-end row-stats">
                {fastestLap.Results[0].FastestLap.AverageSpeed.speed} km/h
              </td>
            </tr>
            <tr>
              <td className="row-stats">Length</td>
              <td className="text-end row-stats">
                {calculateCircuitLength(
                  parseFloat(
                    fastestLap.Results[0].FastestLap.AverageSpeed.speed
                  ),
                  fastestLap.Results[0].FastestLap.Time.time
                )}{" "}
                km
              </td>
            </tr>
            <tr>
              <td className="row-stats">Driver</td>
              <td
                className="clickable-row text-end"
                onClick={() =>
                  driverRowClick(fastestLap.Results[0].Driver.driverId)
                }
              >
                {fastestLap.Results[0].Driver.givenName}{" "}
                <p style={boldFont}>
                  {fastestLap.Results[0].Driver.familyName.toUpperCase()}
                </p>
              </td>
            </tr>
            <tr>
              <td className="row-stats">Team</td>
              <td
                className="clickable-row text-end"
                onClick={() =>
                  constructorRowClick(fastestLap.Results[0].Constructor.url)
                }
              >
                <Row className="justify-content-end text-end">
                  <Col xs="auto">
                    <TeamColor
                      constructorId={
                        fastestLap.Results[0].Constructor.constructorId
                      }
                      height="30px"
                    />
                  </Col>
                  <Col xs="auto">{fastestLap.Results[0].Constructor.name}</Col>
                </Row>
              </td>
            </tr>
          </>
        )}
      </tbody>
    </Table>
  );
};

export default CircuitInformation;
