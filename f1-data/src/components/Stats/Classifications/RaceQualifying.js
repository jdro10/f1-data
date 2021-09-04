import React from "react";
import Table from "react-bootstrap/Table";
import "../Styles/Table.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamColor from "../../TeamColor/TeamColor";

const RaceQualifying = ({ raceQualifying }) => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Pos</th>
            <th className="hideXS">Number</th>
            <th>Driver</th>
            <th className="hideXS">Team</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
          </tr>
        </thead>
        <tbody>
          {raceQualifying.map((driver, index) => (
            <tr key={index}>
              <td>{driver.position}</td>
              <td className="hideXS">{driver.number}</td>
              <td className="hideXS">
                <Row className="row nopadding">
                  <Col xs={1}>
                    <TeamColor
                      constructorId={driver.Constructor.constructorId}
                    />
                  </Col>
                  <Col xs={11}>
                    {driver.Driver.givenName}{" "}
                    <b>{driver.Driver.familyName.toUpperCase()}</b>
                  </Col>
                </Row>
              </td>
              <td className="showXS">
                <Row className="row nopadding">
                  <Col xs={2}>
                    <TeamColor
                      constructorId={driver.Constructor.constructorId}
                    />
                  </Col>
                  <Col xs={6}>
                    {!driver.Driver.hasOwnProperty("code")
                      ? driver.Driver.familyName.substring(0, 3).toUpperCase()
                      : driver.Driver.code}
                  </Col>
                </Row>
              </td>
              <td className="hideXS">{driver.Constructor.name}</td>
              <td>
                {driver.hasOwnProperty("Q1")
                  ? driver.Q1 === ""
                    ? "-"
                    : driver.Q1
                  : "-"}
              </td>
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
