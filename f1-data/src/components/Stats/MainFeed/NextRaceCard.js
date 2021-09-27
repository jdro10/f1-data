import React, { useContext } from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Button from "react-bootstrap/Button";
import ClockCoutdown from "../../Countdown/ClockCountdown";
import { convertDate, getLocalRaceDate } from "../../../helpers/Helpers";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";
import { ThemeContext } from "../../../helpers/ThemeContext";

const boldFont = {
  fontWeight: 600,
};

const NextRaceCard = ({ nextRace }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <GenericCard
      cardTitle="NEXT RACE"
      cardBody={
        <>
          <h5>Round {nextRace.round}</h5>
          <h1 style={boldFont}>{nextRace.raceName.toUpperCase()}</h1>
          <h5>{nextRace.Circuit.circuitName}</h5>
          <h6>{convertDate(nextRace.date)}</h6>
          <h6>{getLocalRaceDate(nextRace.date, nextRace.time)}</h6>
          <CircleFlag
            countryCode={CountriesCodeNationality[
              nextRace.Circuit.Location.country
            ].toLowerCase()}
            height={100}
          />
          <p></p>
          <ClockCoutdown date={nextRace.date} time={nextRace.time} />
        </>
      }
      cardFooter={
        <Link to={`/race/${nextRace.season}/${nextRace.round}`}>
          <Button variant={theme === "light" ? "dark" : "light"}>
            Race information
          </Button>
        </Link>
      }
      cardHeight="32rem"
    />
  );
};

export default NextRaceCard;
