import React from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import Button from "react-bootstrap/Button";
import Countdown from "react-countdown";

const NextRaceCard = ({ nextRaceData }) => {
  return (
    <GenericCard
      cardTitle={"Next race - " + nextRaceData.date}
      cardBody={
        <div>
          <h4>Round {nextRaceData.round}</h4>
          <h3>{nextRaceData.raceName + " - " + nextRaceData.circuitName}</h3>
          <Flag code={nextRaceData.circuitCountryCode} height="50" />
          <h2>
            <Countdown
              date={
                Date.now() +
                (new Date(nextRaceData.date).getTime() +
                  nextRaceData.time.split(":")[0] * 3600000 -
                  new Date().getTime())
              }
            />
          </h2>
        </div>
      }
      cardFooter={
        <Link to={"/race/" + nextRaceData.season + "/" + nextRaceData.round}>
          <Button variant="primary">Race information</Button>
        </Link>
      }
      cardHeight="24rem"
      variant={"light"}
    ></GenericCard>
  );
};

export default NextRaceCard;
