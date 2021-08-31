import React from "react";
import GenericCard from "../../Cards/GenericCard";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import { CircleFlag } from 'react-circle-flags'

const PreviousRaceWinner = ({ previousRaceData, totalNumberOfRaces }) => {
  return (
    <GenericCard
      cardTitle="Previous race winner"
      cardBody={
        <div>
          <h3>
            {previousRaceData.MRData.RaceTable.Races[0].Results[0].Driver
              .permanentNumber +
              " - " +
              previousRaceData.MRData.RaceTable.Races[0].Results[0].Driver
                .givenName +
              " " +
              previousRaceData.MRData.RaceTable.Races[0].Results[0].Driver
                .familyName}
          </h3>

          <h4>
            {
              previousRaceData.MRData.RaceTable.Races[0].Results[0].Constructor
                .name
            }
          </h4>
          <h4>
            {previousRaceData.MRData.RaceTable.Races[0].Results[0].Time.time}
          </h4>
          <CircleFlag
            countryCode={
              CountriesCodeNationality[
                previousRaceData.MRData.RaceTable.Races[0].Results[0].Driver
                  .nationality
              ].toLowerCase()
            }
            height={65}
          />
        </div>
      }
      cardFooter={
        <h4>
          Round:{" "}
          {previousRaceData.MRData.RaceTable.round + " / " + totalNumberOfRaces}
        </h4>
      }
      cardHeight="24rem"
      variant={"dark"}
    ></GenericCard>
  );
};

export default PreviousRaceWinner;
