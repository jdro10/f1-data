import React from "react";
import GenericCard from "../../Cards/GenericCard";
import DriversStandings from "../Standings/DriversStandings";

const DriversStandingsCard = ({ driversStandings }) => {
  return (
    <GenericCard
      cardTitle="Drivers' standings"
      cardBody={
        <DriversStandings
          style={{
            overflow: "hidden",
            overflowY: "scroll",
            height: "390px",
          }}
          driversStandings={driversStandings}
        />
      }
      cardHeight="30rem"
      variant={"light"}
    />
  );
};

export default DriversStandingsCard;
