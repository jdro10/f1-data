import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import { CircleFlag } from "react-circle-flags";
import Table from "react-bootstrap/Table";
import TeamColor from "../../TeamColor/TeamColor";
import "../Styles/Table.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PreviousRaceStats = ({ previousRaceData, totalNumberOfRaces }) => {
  const [fastestLap, setFastestLap] = useState(null);
  const [polePosition, setPolePosition] = useState(null);
  const [loadingPolePosition, setLoadingPolePosition] = useState(true);

  useEffect(() => {
    const getFastestLap = () => {
      let bestLap = previousRaceData.MRData.RaceTable.Races[0];

      previousRaceData.MRData.RaceTable.Races.forEach((lap) => {
        if (lap.Results[0].FastestLap === undefined) {
          setFastestLap(null);
          return;
        } else {
          if (
            lap.Results[0].FastestLap.Time.time <
            bestLap.Results[0].FastestLap.Time.time
          ) {
            bestLap = lap;
          }
        }

        setFastestLap(bestLap);
      });
    };

    const fetchPolePosition = async () => {
      await fetch(
        `https://ergast.com/api/f1/${previousRaceData.MRData.RaceTable.season}/${previousRaceData.MRData.RaceTable.round}/qualifying.json`
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
    previousRaceData.MRData.RaceTable.season,
    previousRaceData.MRData.RaceTable.round,
    previousRaceData.MRData.RaceTable.Races,
  ]);

  return (
    <GenericCard
      cardTitle={`Previous race: ${previousRaceData.MRData.RaceTable.Races[0].raceName}`}
      cardBody={
        <div>
          <h4>
            <b>Race result</b>
          </h4>
          <Table responsive>
            <tbody className="justify-content-center">
              {previousRaceData.MRData.RaceTable.Races[0].Results.slice(
                0,
                3
              ).map((driver, index) => (
                <tr key={index} className="align-middle">
                  <td>{driver.position}</td>
                  <td>
                    <Row>
                      <Col xs={1}>
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
                            <b>{driver.Driver.familyName.toUpperCase()}</b>
                          </Col>
                          <Col className="showXS">
                            <b>{driver.Driver.familyName.toUpperCase()}</b>
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
              ))}
            </tbody>
          </Table>
          <h4>
            <b>Fastest lap / Pole position</b>
          </h4>
          <Table responsive>
            <tbody>
              {fastestLap === null ? null : (
                <tr>
                  <td>FL</td>
                  <td>
                    <Row>
                      <Col xs={1} className="align-self-center">
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
                            <b>{fastestLap.Driver.familyName.toUpperCase()}</b>
                          </Col>
                          <Col className="showXS">
                            <b>{fastestLap.Driver.familyName.toUpperCase()}</b>
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
                  <td>{fastestLap.FastestLap.AverageSpeed.speed} kph</td>
                </tr>
              )}
              {loadingPolePosition ? null : (
                <tr className="align-middle">
                  <td>PP</td>
                  <td>
                    <Row>
                      <Col xs={1} className="align-self-center">
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
                            <b>
                              {polePosition.Driver.familyName.toUpperCase()}
                            </b>
                          </Col>
                          <Col className="showXS">
                            <b>
                              {polePosition.Driver.familyName.toUpperCase()}
                            </b>
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
          Round: {previousRaceData.MRData.RaceTable.round} /{" "}
          {totalNumberOfRaces}
        </h4>
      }
      cardHeight="36rem"
      variant={"light"}
    />
  );
};

export default PreviousRaceStats;
