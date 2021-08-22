import React from "react";
import GenericCard from "../../Cards/GenericCard";

const StandingsCard = ({ standings }) => {
  return (
    <GenericCard
      cardTitle="Drivers' standings"
      cardBody={standings}
      cardHeight="27rem"
    ></GenericCard>
  );
};

export default StandingsCard;
