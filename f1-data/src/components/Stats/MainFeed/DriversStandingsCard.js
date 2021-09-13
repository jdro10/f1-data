import React from "react";
import GenericCard from "../../Cards/GenericCard";
import DriversStandings from "../Standings/DriversStandings";

const DriversStandingsCard = ({ driversStandings }) => {
  return (
    <GenericCard
      cardTitle="DRIVERS' STANDINGS"
      cardBody={
        <DriversStandings
          style={{
            overflow: "hidden",
            overflowY: "scroll",
            height: "480px",
          }}
          driversStandings={driversStandings}
        />
      }
      cardHeight="34rem"
      variant="light"
    />
  );
};

export default DriversStandingsCard;
