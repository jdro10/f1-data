import React from "react";
import Table from "react-bootstrap/Table";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Table.css";
import TeamColor from "../../TeamColor/TeamColor";

const ConstructorsStandings = ({ style, constructorsStandings }) => {
  return (
    <div style={style}>
      {constructorsStandings !== null ? (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>POS</th>
              <th>NAME</th>
              <th className="hideXS">WINS</th>
              <th>POINTS</th>
            </tr>
          </thead>
          <tbody>
            {constructorsStandings.map((constructor, index) => (
              <tr key={index}>
                <td>{constructor.position}</td>
                <td>
                  <Row>
                    <Col xs={2}>
                      <CircleFlag
                        countryCode={CountriesCodeNationality[
                          constructor.Constructor.nationality
                        ].toLowerCase()}
                        height={20}
                      />
                    </Col>
                    <Col xs={1}>
                      <TeamColor
                        constructorId={constructor.Constructor.constructorId}
                      />
                    </Col>
                    <Col xs={8} className="text-start">
                      {constructor.Constructor.name.toUpperCase()}
                    </Col>
                  </Row>
                </td>
                <td className="hideXS">{constructor.wins}</td>
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
