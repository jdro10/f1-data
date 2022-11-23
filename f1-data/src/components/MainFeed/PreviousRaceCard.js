import React from "react";
import GenericCard from "../Cards/GenericCard";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Button from "react-bootstrap/Button";
import { convertDate, getLocalRaceDate } from "../../helpers/Helpers";
import { CountriesCodeNationality } from "../../data/CountryCodeNationality";

const PreviousRaceCard = ({ lastRace }) => {
  return (
    <GenericCard
      cardBody={
        <>
          <h1>{lastRace.MRData.RaceTable.Races[0].raceName.toUpperCase()}</h1>
          <h5>
            {lastRace.MRData.RaceTable.Races[0].Circuit.circuitName.toUpperCase()}
          </h5>
          <h5>ROUND {lastRace.MRData.RaceTable.round}</h5>
          <h6>{convertDate(lastRace.MRData.RaceTable.Races[0].date)}</h6>
          <h6>
            {getLocalRaceDate(
              lastRace.MRData.RaceTable.Races[0].date,
              lastRace.MRData.RaceTable.Races[0].time
            )}
          </h6>
          <CircleFlag
            countryCode={CountriesCodeNationality[
              lastRace.MRData.RaceTable.Races[0].Circuit.Location.country
            ].toLowerCase()}
            height={100}
            style={{ marginTop: "10px" }}
          />
          <h5 style={{ marginTop: "27px" }}>
            {lastRace.MRData.RaceTable.Races[0].Circuit.Location.country.toUpperCase()}
          </h5>
          <h5>
            {lastRace.MRData.RaceTable.Races[0].Circuit.Location.locality.toUpperCase()}
          </h5>

          <Link
            to={`/race/${lastRace.MRData.RaceTable.season}/${lastRace.MRData.RaceTable.round}`}
          >
            <Button
              style={{ marginTop: "25px" }}
              className="main-btn"
              variant="secondary"
            >
              FULL RACE RESULT
            </Button>
          </Link>
        </>
      }
      cardHeight="29.5rem"
    />
  );
};

export default PreviousRaceCard;
