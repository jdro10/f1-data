import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Button from "react-bootstrap/Button";
import { getLocalRaceDate } from "../../../helpers/Helpers";

const PreviousRaceCard = ({ previousRaceData }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [loadingCountryCode, setLoadingCountryCode] = useState(true);

  useEffect(() => {
    const fetchCountryCode = async () => {
      await fetch(
        `https://restcountries.eu/rest/v2/name/${previousRaceData.MRData.RaceTable.Races[0].Circuit.Location.country}?fullText=true`
      )
        .then((res) => res.json())
        .then((result) => {
          setCountryCode(result[0].alpha2Code);
          setLoadingCountryCode(false);
        });
    };

    fetchCountryCode();
  }, [previousRaceData.MRData.RaceTable.Races]);

  return (
    <GenericCard
      cardTitle={"Previous race"}
      cardBody={
        <div>
          <h5>Round {previousRaceData.MRData.RaceTable.round}</h5>
          <h1>{previousRaceData.MRData.RaceTable.Races[0].raceName}</h1>
          <h5>
            {previousRaceData.MRData.RaceTable.Races[0].Circuit.circuitName}
          </h5>
          <h6>{previousRaceData.MRData.RaceTable.Races[0].date}</h6>
          <h6>
            {getLocalRaceDate(
              previousRaceData.MRData.RaceTable.Races[0].date,
              previousRaceData.MRData.RaceTable.Races[0].time
            )}
          </h6>
          {loadingCountryCode ? null : (
            <>
              <br />
              <CircleFlag
                countryCode={countryCode.toLowerCase()}
                height={120}
              />
            </>
          )}
          <h5 style={{ marginTop: "5%" }}>
            {
              previousRaceData.MRData.RaceTable.Races[0].Circuit.Location
                .country
            }
          </h5>
          <h5>
            {
              previousRaceData.MRData.RaceTable.Races[0].Circuit.Location
                .locality
            }
          </h5>
        </div>
      }
      cardFooter={
        <Link
          to={`/race/${previousRaceData.MRData.RaceTable.season}/${previousRaceData.MRData.RaceTable.round}`}
        >
          <Button variant="dark">Full race result</Button>
        </Link>
      }
      cardHeight="34rem"
      variant={"light"}
    />
  );
};

export default PreviousRaceCard;
