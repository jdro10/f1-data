import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import { CircleFlag } from "react-circle-flags";
import Table from "react-bootstrap/Table";
import TeamColor from "../../TeamColor/TeamColor";
import "../Styles/Table.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const boldFont = {
  fontWeight: 600,
  margin: "0px",
  padding: "0px",
  display: "inline",
};

const PreviousRaceStats = ({ lastRace, numberOfRaces }) => {
  const [fastestLap, setFastestLap] = useState(null);
  const [polePosition, setPolePosition] = useState(null);
  const [loadingPolePosition, setLoadingPolePosition] = useState(true);

  useEffect(() => {
    const getFastestLap = () => {
      lastRace.MRData.RaceTable.Races[0].Results.forEach((lap) => {
        if (lap.FastestLap && lap.FastestLap.rank === "1") {
          setFastestLap(lap);
          return;
        }
      });
    };

    const fetchPolePosition = async () => {
      await fetch(
        `https://ergast.com/api/f1/${lastRace.MRData.RaceTable.season}/${lastRace.MRData.RaceTable.round}/qualifying.json`
      )
        .then((res) => res.json())
        .then((result) => {
          setPolePosition(
            result.MRData.RaceTable.Races[0].QualifyingResults[0]
          );
          setLoadingPolePosition(false);
        });
    };

    fetchPolePosition();
    getFastestLap();
  }, [
    lastRace.MRData.RaceTable.season,
    lastRace.MRData.RaceTable.round,
    lastRace.MRData.RaceTable.Races,
  ]);

  return (
    <GenericCard
      cardTitle="PREVIOUS RACE"
      cardBody={
        <div>
          <h4 style={boldFont}>PODIUM</h4>
          <Table responsive>
            <tbody className="justify-content-center">
              {lastRace.MRData.RaceTable.Races[0].Results.slice(0, 3).map(
                (driver, index) => (
                  <tr key={index} className="align-middle">
                    <td>{driver.position}</td>
                    <td>
                      <Row>
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
                            constructorId={driver.Constructor.constructorId}
                            height="42px"
                          />
                        </Col>
                        <Col xs={8} className="text-start">
                          <Row>
                            <Col className="hideXS">
                              {driver.Driver.givenName}{" "}
                              <p style={boldFont}>
                                {driver.Driver.familyName.toUpperCase()}
                              </p>
                            </Col>
                            <Col className="showXS">
                              <p style={boldFont}>
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
                    <td>+{driver.points}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
          <h4 style={boldFont}>FASTEST LAP / POLE POSITION</h4>
          <Table responsive>
            <tbody>
              {fastestLap === null ? null : (
                <tr className="align-middle">
                  <td>FL</td>
                  <td>
                    <Row>
                      <Col xs={2} className="align-self-center">
                        <CircleFlag
                          countryCode={CountriesCodeNationality[
                            fastestLap.Driver.nationality
                          ].toLowerCase()}
                          height={20}
                        />
                      </Col>
                      <Col xs={1}>
                        <TeamColor
                          constructorId={fastestLap.Constructor.constructorId}
                          height="42px"
                        />
                      </Col>
                      <Col xs={8} className="text-start">
                        <Row>
                          <Col className="hideXS">
                            {fastestLap.Driver.givenName}{" "}
                            <p style={boldFont}>
                              {fastestLap.Driver.familyName.toUpperCase()}
                            </p>
                          </Col>
                          <Col className="showXS">
                            <p style={boldFont}>
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
                  <td>{fastestLap.FastestLap.Time.time}</td>
                </tr>
              )}
              {loadingPolePosition ? null : (
                <tr className="align-middle">
                  <td>PP</td>
                  <td>
                    <Row>
                      <Col xs={2} className="align-self-center">
                        <CircleFlag
                          countryCode={CountriesCodeNationality[
                            polePosition.Driver.nationality
                          ].toLowerCase()}
                          height={20}
                        />
                      </Col>
                      <Col xs={1}>
                        <TeamColor
                          constructorId={polePosition.Constructor.constructorId}
                          height="42px"
                        />
                      </Col>
                      <Col xs={8} className="text-start">
                        <Row>
                          <Col className="hideXS">
                            {polePosition.Driver.givenName}{" "}
                            <p style={boldFont}>
                              {polePosition.Driver.familyName.toUpperCase()}
                            </p>
                          </Col>
                          <Col className="showXS">
                            <p style={boldFont}>
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
                  <td>{polePosition.Q3}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      }
      cardFooter={
        <h4>
          Round: {lastRace.MRData.RaceTable.round} / {numberOfRaces}
        </h4>
      }
      cardHeight="34rem"
      variant="light"
    />
  );
};

export default PreviousRaceStats;
