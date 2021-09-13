import React from "react";
import GenericCard from "../../Cards/GenericCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ConstructorsStandings from "../Standings/ConstructorsStandings";

const ConstructorsStandingsCard = ({ constructorsStandings }) => {
  return (
    <GenericCard
      cardTitle="CONSTRUCTORS' STANDINGS"
      cardBody={
        <ConstructorsStandings
          style={{
            overflow: "hidden",
            overflowY: "scroll",
            height: "415px",
          }}
          constructorsStandings={constructorsStandings}
        />
      }
      cardFooter={
        <Link to="/standings">
          <Button variant="dark">Full standings</Button>
        </Link>
      }
      cardHeight="34rem"
      variant="light"
    />
  );
};

export default ConstructorsStandingsCard;
