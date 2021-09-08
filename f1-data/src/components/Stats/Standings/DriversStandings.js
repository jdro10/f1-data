import React from "react";
import Table from "react-bootstrap/Table";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Table.css";
import TeamColor from "../../TeamColor/TeamColor";

const DriversStandings = ({ style, driversStandings }) => {
  return (
    <div style={style}>
      <Table responsive="xs">
        <thead>
          <tr>
            <th>Pos</th>
            <th className="hideXS">No</th>
            <th>Name/Team</th>
            <th className="hideXS">Wins</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {driversStandings.map((driver, index) => (
            <tr key={index} className="align-middle">
              <td>{driver.position}</td>
              <td className="hideXS">{driver.Driver.permanentNumber}</td>
              <td>
                <Row className="g-0">
                  <Col xs={2} className="align-self-center">
                    <CircleFlag
                      countryCode={CountriesCodeNationality[
                        driver.Driver.nationality
                      ].toLowerCase()}
                      height={20}
                    />
                  </Col>
                  <Col xs={1}>
                    <TeamColor
                      constructorId={driver.Constructors[0].constructorId}
                      height="42px"
                    />
                  </Col>
                  <Col xs={8} className="text-start">
                    <Row>
                      <Col className="showXS">
                        <b>{driver.Driver.familyName.toUpperCase()}</b>
                      </Col>
                      <Col className="hideXS">
                        {driver.Driver.givenName}{" "}
                        <b>{driver.Driver.familyName.toUpperCase()}</b>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "13px" }}>
                        {driver.Constructors[0].name}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </td>
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
