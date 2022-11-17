import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../data/CountryCodeNationality";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../SharedStyles/Table.css";
import TeamColor from "../TeamColor/TeamColor";
import { ConstructorLineup } from "../../data/ConstructorLineup";
import { ThemeContext } from "../../helpers/ThemeContext";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};

const ConstructorsStandings = ({
  style,
  constructorsStandings,
  constructorSeason,
  showEngine,
}) => {
  const { theme } = useContext(ThemeContext);

  const rowClick = (wikiConstructorLink) => {
    window.open(wikiConstructorLink, "_blank");
  };

  return (
    <div>
      {constructorsStandings &&
      constructorsStandings.keys(constructorsStandings).length === 0 ? (
        <Table
          className="table-hover standings-table table-striped"
          responsive="sm"
          variant={theme}
        >
          <thead>
            <tr className="text-center">
              <th>POS</th>
              <th>NAME</th>
              {ConstructorLineup.hasOwnProperty(parseInt(constructorSeason)) &&
              showEngine ? (
                <th className="text-start hideXS">ENGINE</th>
              ) : null}
              <th className="hideXS">WINS</th>
              <th>POINTS</th>
            </tr>
          </thead>

          <tbody>
            {constructorsStandings.map((constructor, index) => (
              <tr
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => rowClick(constructor.Constructor.url)}
                className="align-middle text-center"
              >
                <td>{constructor.position}</td>
                <td>
                  <Row className="g-0">
                    <Col xs={2} lg={1} className="align-self-center">
                      <CircleFlag
                        countryCode={CountriesCodeNationality[
                          constructor.Constructor.nationality
                        ].toLowerCase()}
                        height={20}
                      />
                    </Col>

                    <Col xs={2} lg={1}>
                      <TeamColor
                        constructorId={constructor.Constructor.constructorId}
                        height={
                          ConstructorLineup.hasOwnProperty(
                            parseInt(constructorSeason)
                          )
                            ? "43px"
                            : "27px"
                        }
                      />
                    </Col>

                    <Col xs={8} className="text-start no-wrap">
                      <Row>
                        <Col>
                          <p style={boldFont}>
                            {constructor.Constructor.name.toUpperCase()}
                          </p>
                        </Col>
                      </Row>

                      {ConstructorLineup.hasOwnProperty(
                        parseInt(constructorSeason)
                      ) ? (
                        <Row style={{ fontSize: "13px" }}>
                          <Col>
                            {
                              ConstructorLineup[parseInt(constructorSeason)][
                                constructor.Constructor.constructorId
                              ][0]
                            }{" "}
                            /{" "}
                            {
                              ConstructorLineup[parseInt(constructorSeason)][
                                constructor.Constructor.constructorId
                              ][1]
                            }
                          </Col>
                        </Row>
                      ) : null}
                    </Col>
                  </Row>
                </td>
                {ConstructorLineup.hasOwnProperty(
                  parseInt(constructorSeason)
                ) && showEngine ? (
                  <td className="text-start hideXS">
                    <p style={boldFont}>
                      {
                        ConstructorLineup[parseInt(constructorSeason)][
                          constructor.Constructor.constructorId
                        ][2]
                      }
                    </p>
                  </td>
                ) : null}
                <td className="hideXS">{constructor.wins}</td>
                <td>{constructor.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Row
          className="justify-content-center text-center"
          style={{ marginTop: "2%" }}
        >
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
