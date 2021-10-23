import React from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import DriversStandings from "../Standings/DriversStandings";
import Button from "react-bootstrap/Button";

const DriversStandingsCard = ({ driversStandings }) => {
  return (
    <GenericCard
      cardTitle="DRIVERS' STANDINGS"
      cardBody={
        <DriversStandings
          style={{
            overflow: "hidden",
            overflowY: "scroll",
            height: "415px",
          }}
          driversStandings={driversStandings}
        />
      }
      cardHeight="34rem"
      cardFooter={
        <Link to="/standings">
          <Button className="red-btn">FULL STANDINGS</Button>
        </Link>
      }
    />
  );
};

export default DriversStandingsCard;
