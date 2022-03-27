import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import "../SharedStyles/Table.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamColor from "../TeamColor/TeamColor";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../helpers/ThemeContext";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};

const QualifyingClassification = ({
  qualifyingClassification,
  sprintClassification,
}) => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  const rowClick = (driverId) => {
    history.push(`/driver/${driverId}`);
  };

  return (
    <>
      {sprintClassification !== null && sprintClassification !== undefined ? (
        <>
          <h2 className="text-center">SPRINT QUALYFING</h2>
          <Table
            responsive="sm"
            className="table-hover table-striped standings-table"
            variant={theme}
            style={{ marginTop: "10px" }}
          >
            <thead>
              <tr>
                <th className="text-center">POS</th>
                <th className="hideXS text-center">NUMBER</th>
                <th>DRIVER</th>
                <th className="hideXS">TEAM</th>
                <th className="hideXS">LAPS</th>
                <th>TIME/RETIRED</th>
                <th>PTS</th>
                <th className="hideXS">GRID</th>
                <th className="hideXS">+/-</th>
              </tr>
            </thead>

            <tbody>
              {sprintClassification.map((driver, index) => (
                <tr
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => rowClick(driver.Driver.driverId)}
                  className="align-middle"
                >
                  <td className="text-center">{driver.position}</td>
                  <td className="hideXS text-center">{driver.number}</td>
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
                  <td>{driver.points}</td>
                  <td className="hideXS">{driver.grid}</td>
                  <td className="hideXS">
                    {driver.grid === "0"
                      ? 20 - driver.position
                      : driver.grid - driver.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h2 className="text-center">QUALIFYING</h2>
        </>
      ) : null}

      <Table
        responsive="sm"
        className="table-hover table-striped standings-table"
        variant={theme}
        style={{ marginTop: "10px" }}
      >
        <thead>
          <tr>
            <th className="text-center">POS</th>
            <th className="hideXS text-center">NUMBER</th>
            <th>DRIVER</th>
            <th className="hideXS">TEAM</th>
            <th className="text-center">Q1</th>
            <th className="text-center">Q2</th>
            <th className="text-center">Q3</th>
          </tr>
        </thead>

        <tbody>
          {qualifyingClassification.map((driver, index) => (
            <tr
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => rowClick(driver.Driver.driverId)}
            >
              <td className="text-center">{driver.position}</td>
              <td className="hideXS text-center">{driver.number}</td>
              <td className="hideXS">
                <Row className="g-2">
                  <Col xs={1}>
                    <TeamColor
                      constructorId={driver.Constructor.constructorId}
                    />
                  </Col>

                  <Col>
                    {driver.Driver.givenName}{" "}
                    <p style={boldFont}>
                      {driver.Driver.familyName.toUpperCase()}
                    </p>
                  </Col>
                </Row>
              </td>
              <td className="showXS">
                <Row className="g-2">
                  <Col xs={1}>
                    <TeamColor
                      constructorId={driver.Constructor.constructorId}
                    />
                  </Col>

                  <Col xs={6}>
                    <p style={boldFont}>
                      {!driver.Driver.hasOwnProperty("code")
                        ? driver.Driver.familyName.substring(0, 3).toUpperCase()
                        : driver.Driver.code}
                    </p>
                  </Col>
                </Row>
              </td>
              <td className="hideXS">{driver.Constructor.name}</td>
              <td className="text-center">
                {driver.hasOwnProperty("Q1")
                  ? driver.Q1 === ""
                    ? "-"
                    : driver.Q1
                  : "-"}
              </td>
              <td className="text-center">
                {driver.hasOwnProperty("Q2") ? driver.Q2 : "-"}
              </td>
              <td className="text-center">
                {driver.hasOwnProperty("Q3") ? driver.Q3 : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default QualifyingClassification;
