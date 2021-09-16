import React, { useContext } from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import DriversStandings from "../Standings/DriversStandings";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../../helpers/ThemeContext";

const DriversStandingsCard = ({ driversStandings }) => {
  const { theme } = useContext(ThemeContext);

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
          <Button variant={theme === "light" ? "dark" : "light"}>
            Full standings
          </Button>
        </Link>
      }
    />
  );
};

export default DriversStandingsCard;
