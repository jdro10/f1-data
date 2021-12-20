import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { CircleFlag } from "react-circle-flags";
import { CountriesCodeNationality } from "../../data/CountryCodeNationality";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../SharedStyles/Table.css";
import TeamColor from "../TeamColor/TeamColor";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../helpers/ThemeContext";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};

const DriversStandings = ({ style, driversStandings }) => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  const rowClick = (driverId) => {
    history.push(`/driver/${driverId}`);
  };

  return (
    <div style={style}>
      <Table
        className="table-hover table-striped standings-table"
        responsive="xs"
        variant={theme}
      >
        <thead>
          <tr className="text-center">
            <th>POS</th>
            <th className="hideXS">NO</th>
            <th>NAME/TEAM</th>
            <th className="hideXS">WINS</th>
            <th>POINTS</th>
          </tr>
        </thead>
        <tbody>
          {driversStandings.map((driver, index) => (
            <tr
              key={index}
              className="align-middle text-center"
              style={{ cursor: "pointer" }}
              onClick={() => rowClick(driver.Driver.driverId)}
            >
              <td>{driver.position}</td>
              <td className="hideXS">{driver.Driver.permanentNumber}</td>
              <td>
                <Row className="g-0">
                  <Col xs={2} lg={1} className="align-self-center">
                    <CircleFlag
                      countryCode={
                        CountriesCodeNationality[driver.Driver.nationality] !==
                        undefined
                          ? CountriesCodeNationality[
                              driver.Driver.nationality
                            ].toLowerCase()
                          : null
                      }
                      height={20}
                    />
                  </Col>

                  <Col xs={2} lg={1}>
                    <TeamColor
                      constructorId={
                        driver.Constructors.length > 0
                          ? driver.Constructors[0].constructorId
                          : null
                      }
                      height="42px"
                    />
                  </Col>

                  <Col xs={8} className="text-start">
                    <Row>
                      <Col className="showXS">
                        <p style={boldFont}>
                          {driver.Driver.familyName.toUpperCase()}
                        </p>
                      </Col>

                      <Col className="hideXS">
                        {driver.Driver.givenName}{" "}
                        <p style={boldFont}>
                          {driver.Driver.familyName.toUpperCase()}
                        </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col style={{ fontSize: "13px" }}>
                        {driver.Constructors.length > 0
                          ? driver.Constructors[0].name
                          : "-"}
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
