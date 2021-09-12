import React from "react";
import GenericCard from "../../Cards/GenericCard";
import ConstructorsStandings from "../Standings/ConstructorsStandings";

const ConstructorsStandingsCard = ({ constructorsStandings }) => {
  return (
    <GenericCard
      cardTitle="Constructors' standings"
      cardBody={
        <ConstructorsStandings constructorsStandings={constructorsStandings} />
      }
      cardHeight="34rem"
      variant="light"
    />
  );
};

export default ConstructorsStandingsCard;
