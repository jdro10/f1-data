import React from "react";
import Table from "react-bootstrap/Table";
import "../../SharedStyles/Table.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamColor from "../../TeamColor/TeamColor";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};

const RaceQualifying = ({ raceQualifying }) => {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>POS</th>
          <th className="hideXS">NUMBER</th>
          <th>DRIVER</th>
          <th className="hideXS">TEAM</th>
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
              <Row className="g-2">
                <Col xs={1}>
                  <TeamColor constructorId={driver.Constructor.constructorId} />
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
                  <TeamColor constructorId={driver.Constructor.constructorId} />
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
  );
};

export default RaceQualifying;
