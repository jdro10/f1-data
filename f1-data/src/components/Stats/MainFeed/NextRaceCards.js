import React from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import Button from "react-bootstrap/Button";

const NextRaceCard = ({ nextRaceData }) => {
  return (
    <GenericCard
      cardTitle={"Next race - " + nextRaceData.date}
      cardBody={
        <div>
          <h3>{nextRaceData.raceName + " - " + nextRaceData.circuitName}</h3>
          <Flag code={nextRaceData.circuitCountryCode} height="50" />
        </div>
      }
      cardFooter={
        <Link to={"/race/" + nextRaceData.season + "/" + nextRaceData.round}>
          <Button variant="primary">Race information</Button>
        </Link>
      }
      cardHeight="18rem"
    ></GenericCard>
  );
};

export default NextRaceCard;
