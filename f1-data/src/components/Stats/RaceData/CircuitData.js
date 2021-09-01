import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";

const Circuit = ({ circuitId }) => {
  const [fastestLap, setFastestLap] = useState(null);
  const [firstGrandPrix, setFirstGrandPrix] = useState(null);
  const [loadingFastestLap, setLoadingFastestLap] = useState(true);
  const [loadingFirstGrandPrix, setLoadingFirstGrandPrix] = useState(true);

  useEffect(() => {
    const fetchCircuitFastestLap = () => {
      fetch(
        `https://ergast.com/api/f1/circuits/${circuitId}/fastest/1/results.json`
      )
        .then((res) => res.json())
        .then((result) => {
          let bestLap = result.MRData.RaceTable.Races[0];

          result.MRData.RaceTable.Races.forEach((lap) => {
            if (
              lap.Results[0].FastestLap.Time.time <
              bestLap.Results[0].FastestLap.Time.time
            ) {
              bestLap = lap;
            }
          });

          setFastestLap(bestLap);
          setLoadingFastestLap(false);
        });
    };

    const fetchCircuitFirstGP = () => {
      fetch(`https://ergast.com/api/f1/circuits/${circuitId}/races.json`)
        .then((res) => res.json())
        .then((result) => {
          setFirstGrandPrix(result.MRData.RaceTable.Races[0].season);
          setLoadingFirstGrandPrix(false);
        });
    };

    fetchCircuitFastestLap();
    fetchCircuitFirstGP();
  }, [circuitId]);

  return (
    <div>
      {loadingFastestLap || loadingFirstGrandPrix ? null : (
        <div>
          {fastestLap === undefined ? null : (
            <Row>
              <h5>
                Lap record: {fastestLap.Results[0].FastestLap.Time.time}
                {" - "}
                {fastestLap.season}
                {" - "}
                {fastestLap.Results[0].Driver.givenName}{" "}
                {fastestLap.Results[0].Driver.familyName}{" "}
              </h5>
            </Row>
          )}
          <Row>
            <h5>First grand prix: {firstGrandPrix}</h5>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Circuit;
