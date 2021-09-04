import React from "react";
import GenericCard from "../../Cards/GenericCard";
import ConstructorsStandings from "../Standings/ConstructorsStandings";

const ConstructorsStandingsCard = ({ constructorsStandings }) => {
  return (
    <GenericCard
      cardTitle="Constructors' standings"
      cardBody={
        <ConstructorsStandings
          style={{
            overflow: "hidden",
            overflowY: "scroll",
            height: "390px",
          }}
          constructorsStandings={constructorsStandings}
        />
      }
      cardHeight="30rem"
      variant={"light"}
    />
  );
};

export default ConstructorsStandingsCard;
