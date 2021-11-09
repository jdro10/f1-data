import React, { useState, useEffect, useContext } from "react";
import GenericCard from "../Cards/GenericCard";
import { CountriesCodeNationality } from "../../data/CountryCodeNationality";
import { CircleFlag } from "react-circle-flags";
import Table from "react-bootstrap/Table";
import TeamColor from "../TeamColor/TeamColor";
import "../SharedStyles/Table.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../helpers/ThemeContext";
import { GiPodiumWinner } from "react-icons/gi";
import { GiPodiumSecond } from "react-icons/gi";
import { GiPodiumThird } from "react-icons/gi";
import { FaStopwatch } from "react-icons/fa";
import { SiFastly } from "react-icons/si";

const driverName = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
  marginTop: "50px",
};

const PreviousRaceStats = ({ lastRace, numberOfRaces }) => {
  const { theme } = useContext(ThemeContext);
  const [fastestLap, setFastestLap] = useState(null);
  const [polePosition, setPolePosition] = useState(null);
  const [poleTime, setPoleTime] = useState(null);
  const [loadingPoleTime, setLoadingPoleTime] = useState(true);
  const [loadingPolePosition, setLoadingPolePosition] = useState(true);

  const history = useHistory();

  const rowClick = (driverId) => {
    history.push(`/driver/${driverId}`);
  };

  useEffect(() => {
    const getFastestLap = () => {
      lastRace.MRData.RaceTable.Races[0].Results.forEach((lap) => {
        if (lap.FastestLap && lap.FastestLap.rank === "1") {
          setFastestLap(lap);
          return;
        }
      });
    };

    const getPolePosition = () => {
      lastRace.MRData.RaceTable.Races[0].Results.forEach((result) => {
        if (result.grid === "1") {
          setPolePosition(result);
          setLoadingPolePosition(false);

          fetch(
            `https://ergast.com/api/f1/${lastRace.MRData.RaceTable.season}/${lastRace.MRData.RaceTable.round}/drivers/${result.Driver.driverId}/qualifying.json`
          )
            .then((res) => res.json())
            .then((result) => {
              setPoleTime(
                result.MRData.RaceTable.Races[0].QualifyingResults[0].Q3
              );
              setLoadingPoleTime(false);
            });

          return;
        }
      });
    };

    getFastestLap();
    getPolePosition();
  }, [
    lastRace.MRData.RaceTable.season,
    lastRace.MRData.RaceTable.round,
    lastRace.MRData.RaceTable.Races,
  ]);

  return (
    <GenericCard
      cardTitle="PREVIOUS RACE"
      cardBody={
        <>
          <h4>PODIUM</h4>
          <Table responsive className="table-hover" variant={theme}>
            <tbody className="justify-content-center">
              {lastRace.MRData.RaceTable.Races[0].Results.slice(0, 3).map(
                (driver, index) => (
                  <tr
                    key={index}
                    className="align-middle"
                    style={{ cursor: "pointer" }}
                    onClick={() => rowClick(driver.Driver.driverId)}
                  >
                    <td className="icon">
                      {driver.position === "1" ? (
                        <GiPodiumWinner size={23} />
                      ) : driver.position === "2" ? (
                        <GiPodiumSecond size={23} />
                      ) : driver.position === "3" ? (
                        <GiPodiumThird size={23} />
                      ) : null}
                    </td>
                    <td>
                      <Row className="g-0 text-start">
                        <Col xs="auto" className="align-self-center">
                          <CircleFlag
                            countryCode={CountriesCodeNationality[
                              driver.Driver.nationality
                            ].toLowerCase()}
                            height={20}
                          />
                        </Col>

                        <Col xs={2} sm={1}>
                          <TeamColor
                            constructorId={driver.Constructor.constructorId}
                            height="42px"
                          />
                        </Col>

                        <Col xs={8} className="text-start">
                          <Row>
                            <Col className="hideXS">
                              {driver.Driver.givenName}{" "}
                              <p style={driverName}>
                                {driver.Driver.familyName.toUpperCase()}
                              </p>
                            </Col>

                            <Col className="showXS">
                              <p style={driverName}>
                                {driver.Driver.familyName.toUpperCase()}
                              </p>
                            </Col>
                          </Row>

                          <Row>
                            <Col style={{ fontSize: "13px" }}>
                              {driver.Constructor.name}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </td>
                    <td className="third-info">+{driver.points}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>

          <h4>FASTEST LAP / POLE POSITION</h4>

          <Table responsive className="table-hover" variant={theme}>
            <tbody>
              {fastestLap === null ? null : (
                <tr
                  className="align-middle"
                  style={{ cursor: "pointer" }}
                  onClick={() => rowClick(fastestLap.Driver.driverId)}
                >
                  <td className="icon">
                    <FaStopwatch size={20} />
                  </td>
                  <td>
                    <Row className="g-0 text-start">
                      <Col xs="auto" className="align-self-center">
                        <CircleFlag
                          countryCode={CountriesCodeNationality[
                            fastestLap.Driver.nationality
                          ].toLowerCase()}
                          height={20}
                        />
                      </Col>

                      <Col xs={2} sm={1}>
                        <TeamColor
                          constructorId={fastestLap.Constructor.constructorId}
                          height="42px"
                        />
                      </Col>

                      <Col xs={8} className="text-start">
                        <Row>
                          <Col className="hideXS">
                            {fastestLap.Driver.givenName}{" "}
                            <p style={driverName}>
                              {fastestLap.Driver.familyName.toUpperCase()}
                            </p>
                          </Col>

                          <Col className="showXS">
                            <p style={driverName}>
                              {fastestLap.Driver.familyName.toUpperCase()}
                            </p>
                          </Col>
                        </Row>

                        <Row>
                          <Col style={{ fontSize: "13px" }}>
                            {fastestLap.Constructor.name}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </td>
                  <td className="third-info">
                    {fastestLap.FastestLap.Time.time}
                  </td>
                </tr>
              )}

              {loadingPolePosition || loadingPoleTime ? null : (
                <tr
                  className="align-middle"
                  style={{ cursor: "pointer" }}
                  onClick={() => rowClick(polePosition.Driver.driverId)}
                >
                  <td>
                    <SiFastly size={21} />
                  </td>
                  <td>
                    <Row className="g-0 text-start">
                      <Col xs="auto" className="align-self-center">
                        <CircleFlag
                          countryCode={CountriesCodeNationality[
                            polePosition.Driver.nationality
                          ].toLowerCase()}
                          height={20}
                        />
                      </Col>

                      <Col xs={2} sm={1}>
                        <TeamColor
                          constructorId={polePosition.Constructor.constructorId}
                          height="42px"
                        />
                      </Col>

                      <Col xs={8}>
                        <Row>
                          <Col className="hideXS">
                            {polePosition.Driver.givenName}{" "}
                            <p style={driverName}>
                              {polePosition.Driver.familyName.toUpperCase()}
                            </p>
                          </Col>

                          <Col className="showXS">
                            <p style={driverName}>
                              {polePosition.Driver.familyName.toUpperCase()}
                            </p>
                          </Col>
                        </Row>

                        <Row>
                          <Col style={{ fontSize: "13px" }}>
                            {polePosition.Constructor.name}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </td>
                  <td className="third-info">{poleTime}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </>
      }
      cardFooter={
        <h4>
          ROUND: {lastRace.MRData.RaceTable.round}/{numberOfRaces}
        </h4>
      }
      cardHeight="34rem"
    />
  );
};

export default PreviousRaceStats;
