import React from "react";
import Row from "react-bootstrap/Row";
import GenericCard from "../Cards/GenericCard";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Button from "react-bootstrap/Button";
import ClockCoutdown from "../Countdown/ClockCountdown";
import { convertDate, getLocalRaceDate } from "../../helpers/Helpers";
import { CountriesCodeNationality } from "../../data/CountryCodeNationality";

const boldFont = {
  fontWeight: 600,
};

const NextRaceCard = ({ nextRace }) => {
  return (
    <GenericCard
      cardBody={
        <>
          <h1 style={boldFont}>
            {nextRace === undefined
              ? "TBA GRAND PRIX"
              : nextRace.raceName.toUpperCase()}
          </h1>
          <h5>
            {nextRace === undefined
              ? "TBA"
              : nextRace.Circuit.circuitName.toUpperCase()}
          </h5>
          <h5>
            {nextRace === undefined ? "ROUND 1" : "ROUND " + nextRace.round}
          </h5>
          <h6>{nextRace === undefined ? "TBA" : convertDate(nextRace.date)}</h6>
          <h6>
            {nextRace === undefined
              ? "TBA"
              : getLocalRaceDate(nextRace.date, nextRace.time)}
          </h6>
          <CircleFlag
            countryCode={
              nextRace === undefined
                ? null
                : CountriesCodeNationality[
                    nextRace.Circuit.Location.country
                  ].toLowerCase()
            }
            height={100}
          />
          <p></p>
          {nextRace === undefined ? (
            <Row className="justify-content-center">
              <ClockCoutdown date="2022-03-20" time="15:00:00" />
            </Row>
          ) : (
            <Row className="justify-content-center">
              <ClockCoutdown date={nextRace.date} time={nextRace.time} />
            </Row>
          )}
          <Row>
            {nextRace === undefined ? (
              "-"
            ) : (
              <Link to={`/race/${nextRace.season}/${nextRace.round}`}>
                <Button
                  style={{ maxWidth: "100%" }}
                  className="main-btn"
                  variant="secondary"
                >
                  RACE INFORMATION
                </Button>
              </Link>
            )}
          </Row>
        </>
      }
      cardHeight="29rem"
    />
  );
};

export default NextRaceCard;
