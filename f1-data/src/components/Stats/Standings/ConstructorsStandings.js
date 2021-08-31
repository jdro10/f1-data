import React from "react";
import Table from "react-bootstrap/Table";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Table.css";

const ConstructorsStandings = ({ style, constructorsStandings }) => {
  return (
    <div style={style}>
      {constructorsStandings !== null ? (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {constructorsStandings.map((constructor, index) => (
              <tr key={index}>
                <td>{constructor.position}</td>
                <td>
                  <Row className="justify-content-center text-" xs="auto">
                    <Col xs={4}>
                      <CircleFlag
                        countryCode={
                          CountriesCodeNationality[
                            constructor.Constructor.nationality
                          ].toLowerCase()
                        }
                        height={30}
                      />
                    </Col>
                    <Col xs={8}>{constructor.Constructor.name}</Col>
                  </Row>
                </td>

                <td>{constructor.wins}</td>
                <td>{constructor.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Row className="justify-content-center text-center">
          <Col md="auto">
            <h3>
              There's no constructors' standings data available for this season.
            </h3>
            <br />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ConstructorsStandings;
