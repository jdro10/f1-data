import React from "react";
import GenericCard from "../../Cards/GenericCard";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import Flag from "react-world-flags";

const PreviousRaceWinner = ({ previousRaceData, totalNumberOfRaces }) => {
  return (
    <GenericCard
      cardTitle="Previous race winner"
      cardBody={
        <div>
          <h3>
            {previousRaceData.raceWinnerNumber +
              " - " +
              previousRaceData.raceWinnerName}
          </h3>

          <h4>{previousRaceData.raceWinnerConstructorName}</h4>
          <h4>{previousRaceData.raceWinnerTime}</h4>
          <Flag
            code={
              CountriesCodeNationality[previousRaceData.raceWinnerNationality]
            }
            height={50}
          />
        </div>
      }
      cardFooter={
        <h4>Round: {previousRaceData.round + " / " + totalNumberOfRaces}</h4>
      }
      cardHeight="24rem"
      variant={"primary"}
    ></GenericCard>
  );
};

export default PreviousRaceWinner;
