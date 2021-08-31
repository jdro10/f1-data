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
          <h1>
            {previousRaceData.MRData.RaceTable.Races[0].Results[0].Driver
              .permanentNumber +
              " - " +
              previousRaceData.MRData.RaceTable.Races[0].Results[0].Driver
                .givenName +
              " " +
              previousRaceData.MRData.RaceTable.Races[0].Results[0].Driver
                .familyName}
          </h1>

          <h5>
            {
              previousRaceData.MRData.RaceTable.Races[0].Results[0].Constructor
                .name
            }
          </h5>
          <h5>
            {previousRaceData.MRData.RaceTable.Races[0].Results[0].Time.time}
          </h5>
          <CircleFlag
            countryCode={
              CountriesCodeNationality[
                previousRaceData.MRData.RaceTable.Races[0].Results[0].Driver
                  .nationality
              ].toLowerCase()
            }
            height={100}
          />
        </div>
      }
      cardFooter={
        <h4>
          Round:{" "}
          {previousRaceData.MRData.RaceTable.round + " / " + totalNumberOfRaces}
        </h4>
      }
      cardHeight="26rem"
      variant={"dark"}
    ></GenericCard>
  );
};

export default PreviousRaceWinner;
