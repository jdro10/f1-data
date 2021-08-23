import React from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import Button from "react-bootstrap/Button";

const PreviousRaceCard = ({ previousRaceData }) => {
  return (
    <GenericCard
      cardTitle={"Previous race - " + previousRaceData.date}
      cardBody={
        <div>
          <h4>Round {previousRaceData.round}</h4>
          <h2>
            {previousRaceData.raceName + " - " + previousRaceData.circuitName}
          </h2>
          <Flag code={previousRaceData.circuitCountryCode} height="50" />
        </div>
      }
      cardFooter={
        <Link
          to={"/race/" + previousRaceData.season + "/" + previousRaceData.round}
        >
          <Button variant="primary">Race result</Button>
        </Link>
      }
      cardHeight="24rem"
      variant={"light"}
    ></GenericCard>
  );
};

export default PreviousRaceCard;
