import React from "react";
import GenericCard from "../../Cards/GenericCard";

const StandingsCard = ({ type, standings }) => {
  return (
    <GenericCard
      cardTitle={type + " standings"}
      cardBody={standings}
      cardHeight="27rem"
      variant={"light"}
    ></GenericCard>
  );
};

export default StandingsCard;
