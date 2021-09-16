import React, { useContext } from "react";
import GenericCard from "../../Cards/GenericCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ConstructorsStandings from "../Standings/ConstructorsStandings";
import { ThemeContext } from "../../../helpers/ThemeContext";

const ConstructorsStandingsCard = ({ constructorsStandings }) => {
  const { theme } = useContext(ThemeContext);

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
          <Button variant={theme === "light" ? "dark" : "light"}>
            Full standings
          </Button>
        </Link>
      }
      cardHeight="34rem"
    />
  );
};

export default ConstructorsStandingsCard;
