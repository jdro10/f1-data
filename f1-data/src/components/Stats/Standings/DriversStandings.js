import React from "react";
import Table from "react-bootstrap/Table";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Table.css";
import { TeamColors } from "../../../data/TeamColors";

const DriversStandings = ({ style, driversStandings }) => {
  return (
    <div style={style}>
      <Table responsive="xs">
        <thead>
          <tr>
            <th>Pos</th>
            <th className="hideXS">No</th>
            <th>Name</th>
            <th className="hideXS">Team</th>
            <th className="hideXS">Wins</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {driversStandings.map((driver, index) => (
            <tr key={index}>
              <td>{driver.position}</td>
              <td className="hideXS">{driver.Driver.permanentNumber}</td>
              <td>
                <Row className="justify-content-center text-center">
                  <Col>
                    <CircleFlag
                      countryCode={CountriesCodeNationality[
                        driver.Driver.nationality
                      ].toLowerCase()}
                      height={20}
                    />
                  </Col>
                  <Col>
                    <div
                      style={{
                        width: "7px",
                        height: "25px",
                        backgroundColor: TeamColors.hasOwnProperty(
                          driver.Constructors[0].constructorId
                        )
                          ? TeamColors[driver.Constructors[0].constructorId]
                          : "#000000",
                      }}
                    />
                  </Col>
                  <Col className="hideXS">
                    {driver.Driver.givenName + " " + driver.Driver.familyName}
                  </Col>
                  <Col className="showXS">
                    {!driver.Driver.hasOwnProperty("code")
                      ? driver.Driver.familyName.substring(0, 3).toUpperCase()
                      : driver.Driver.code}
                  </Col>
                </Row>
              </td>
              <td className="hideXS">{driver.Constructors[0].name}</td>
              <td className="hideXS">{driver.wins}</td>
              <td>{driver.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DriversStandings;
