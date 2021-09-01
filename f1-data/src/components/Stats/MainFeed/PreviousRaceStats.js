import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import { CircleFlag } from "react-circle-flags";
import Table from "react-bootstrap/Table";
import TeamColor from "../../TeamColor/TeamColor";
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
                <tr key={index}>
                  <td>{driver.position}</td>
                  <td>
                    <TeamColor
                      constructorId={driver.Constructor.constructorId}
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
                  <td className="hideXS">
                    {driver.Driver.givenName} {driver.Driver.familyName}
                  </td>
                  <td className="showXS">{driver.Driver.code}</td>
                  <td>{driver.Time.time}</td>
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
                    <TeamColor
                      constructorId={fastestLap.Constructor.constructorId}
                    />
                  </td>
                  <td className="hideXS">
                    {fastestLap.Driver.givenName} {fastestLap.Driver.familyName}
                  </td>
                  <td className="showXS">{fastestLap.Driver.code}</td>
                  <td>{fastestLap.FastestLap.Time.time}</td>
                  <td>{fastestLap.FastestLap.AverageSpeed.speed} kph</td>
                </tr>
              )}
              {loadingPolePosition ? null : (
                <tr>
                  <td>PP</td>
                  <td>
                    <TeamColor
                      constructorId={polePosition.Constructor.constructorId}
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
                  <td className="hideXS">
                    {polePosition.Driver.givenName}{" "}
                    {polePosition.Driver.familyName}
                  </td>
                  <td className="showXS">{polePosition.Driver.code}</td>
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
      cardHeight="30rem"
      variant={"light"}
    />
  );
};

export default PreviousRaceStats;
