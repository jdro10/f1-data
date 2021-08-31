import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import { CircleFlag } from "react-circle-flags";
import Table from "react-bootstrap/Table";
import { TeamColors } from "../../../data/TeamColors";
import "../Styles/Table.css";

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
      const response = await fetch(
        `https://ergast.com/api/f1/${previousRaceData.MRData.RaceTable.season}/${previousRaceData.MRData.RaceTable.round}/qualifying.json`
      );
      const data = await response.json();

      setPolePosition(data.MRData.RaceTable.Races[0].QualifyingResults[0]);
      setLoadingPolePosition(false);
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
      cardTitle={
        "Previous race: " + previousRaceData.MRData.RaceTable.Races[0].raceName
      }
      cardBody={
        <div>
          <h4>Race result</h4>
          <Table responsive>
            <tbody className="justify-content-center">
              {previousRaceData.MRData.RaceTable.Races[0].Results.slice(
                0,
                3
              ).map((driver, index) => (
                <tr key={index}>
                  <td>{driver.position}</td>
                  <td>
                    <div
                      style={{
                        width: "7px",
                        height: "25px",
                        backgroundColor: TeamColors.hasOwnProperty(
                          driver.Constructor.constructorId
                        )
                          ? TeamColors[driver.Constructor.constructorId]
                          : "#000000",
                      }}
                    />
                  </td>
                  <td>
                    <CircleFlag
                      countryCode={CountriesCodeNationality[
                        driver.Driver.nationality
                      ].toLowerCase()}
                      height={20}
                    />
                  </td>
                  <td className="hideSM">
                    {driver.Driver.givenName + " " + driver.Driver.familyName}
                  </td>
                  <td className="showSM">{driver.Driver.code}</td>
                  <td>{driver.Time.time}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table responsive style={{ marginTop: "15px" }}>
            <tbody>
              {fastestLap !== null ? (
                <tr>
                  <td>FL</td>
                  <td>
                    <div
                      style={{
                        width: "7px",
                        height: "25px",
                        backgroundColor: TeamColors.hasOwnProperty(
                          fastestLap.Constructor.constructorId
                        )
                          ? TeamColors[fastestLap.Constructor.constructorId]
                          : "#000000",
                      }}
                    />
                  </td>
                  <td className="hideSM">
                    {fastestLap.Driver.givenName +
                      " " +
                      fastestLap.Driver.familyName}
                  </td>
                  <td className="showSM">{fastestLap.Driver.code}</td>
                  <td>{fastestLap.FastestLap.Time.time}</td>
                  <td>{fastestLap.FastestLap.AverageSpeed.speed + " kph"}</td>
                </tr>
              ) : (
                <tr>
                  <td>FL</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
              )}
              {loadingPolePosition ? null : (
                <tr>
                  <td>PP</td>
                  <td>
                    <div
                      style={{
                        width: "7px",
                        height: "25px",
                        backgroundColor: TeamColors.hasOwnProperty(
                          polePosition.Constructor.constructorId
                        )
                          ? TeamColors[polePosition.Constructor.constructorId]
                          : "#000000",
                      }}
                    />
                  </td>
                  <td>
                    <CircleFlag
                      countryCode={CountriesCodeNationality[
                        polePosition.Driver.nationality
                      ].toLowerCase()}
                      height={20}
                    />
                  </td>
                  <td className="hideSM">
                    {polePosition.Driver.givenName +
                      " " +
                      polePosition.Driver.familyName}
                  </td>
                  <td className="showSM">{polePosition.Driver.code}</td>
                  <td>{polePosition.Q3}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      }
      cardFooter={
        <h4>
          Round:{" "}
          {previousRaceData.MRData.RaceTable.round + " / " + totalNumberOfRaces}
        </h4>
      }
      cardHeight="30rem"
      variant={"light"}
    ></GenericCard>
  );
};

export default PreviousRaceStats;
