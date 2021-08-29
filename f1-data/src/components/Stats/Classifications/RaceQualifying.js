import React from "react";
import Table from "react-bootstrap/Table";
import "../Styles/Table.css";
import { TeamColors } from "../../../data/TeamColors";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                <Row className="row nopadding">
                  <Col xs={1}>
                    <div
                      style={{
                        width: "7px",
                        height: "25px",
                        backgroundColor: TeamColors.hasOwnProperty(
                          driver.Constructor.constructorId
                        )
                          ? TeamColors[driver.Constructor.constructorId]
                          : "#000000",
                      }}
                    />
                  </Col>
                  <Col xs={11}>
                    {driver.Driver.givenName + " " + driver.Driver.familyName}
                  </Col>
                </Row>
              </td>
              <td className="showSM">
                <Row className="row nopadding">
                  <Col xs={2}>
                    <div
                      style={{
                        width: "7px",
                        height: "25px",
                        backgroundColor: TeamColors.hasOwnProperty(
                          driver.Constructor.constructorId
                        )
                          ? TeamColors[driver.Constructor.constructorId]
                          : "#000000",
                      }}
                    />
                  </Col>
                  <Col xs={6}>
                    {!driver.Driver.hasOwnProperty("code") ? (
                      <td className="showSM">
                        {driver.Driver.familyName.substring(0, 3).toUpperCase()}
                      </td>
                    ) : (
                      <td className="showSM">{driver.Driver.code}</td>
                    )}
                  </Col>
                </Row>
              </td>

              <td className="hideSM">{driver.Constructor.name}</td>
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
