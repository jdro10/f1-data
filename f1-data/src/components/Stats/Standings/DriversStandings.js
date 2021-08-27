import React from "react";
import Table from "react-bootstrap/Table";
import Flag from "react-world-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Table.css";

const DriversStandings = ({ style, driversStandings }) => {
  return (
    <div style={style}>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Pos</th>
            <th className="hideSM">No</th>
            <th>Name</th>
            <th>Team</th>
            <th className="hideSM">Wins</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {driversStandings.map((driver, index) => (
            <tr key={index}>
              <td>{driver.position}</td>
              <td className="hideSM">{driver.Driver.permanentNumber}</td>
              <td className="hideSM">
                <Row className="justify-content-center text-center">
                  <Col xs={6} sm={4}>
                    <Flag
                      code={CountriesCodeNationality[driver.Driver.nationality]}
                      height="15"
                      width="25"
                    />
                  </Col>
                  <Col xs={10} sm={8}>
                    {driver.Driver.givenName + " " + driver.Driver.familyName}
                  </Col>
                </Row>
              </td>
              <td className="showSM">
                <Row className="justify-content-center text-center">
                  <Col xs={4}>
                    <Flag
                      code={CountriesCodeNationality[driver.Driver.nationality]}
                      height="15"
                      width="25"
                    />
                  </Col>
                  <Col xs={8}>
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
              <td>{driver.Constructors[0].name}</td>
              <td className="hideSM">{driver.wins}</td>
              <td>{driver.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DriversStandings;
