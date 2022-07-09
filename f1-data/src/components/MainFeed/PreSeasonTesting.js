import React from "react";
import GenericCard from "../Cards/GenericCard";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Button from "react-bootstrap/Button";
import ClockCoutdown from "../Countdown/ClockCountdown";
import { convertDate, getLocalRaceDate } from "../../helpers/Helpers";
import { preSeasonInformation } from "../../data/PreSeasonInformation";

const boldFont = {
  fontWeight: 600,
};

const PreSeasonTesting = () => {
  return (
    <GenericCard
      cardBody={
        <>
          <Row>
            <h1 style={boldFont}>{preSeasonInformation.name}</h1>
            <h5>{preSeasonInformation.circuit_name.toUpperCase()}</h5>
            <h5>ROUND {preSeasonInformation.round}-3</h5>
            <h6>{convertDate(preSeasonInformation.date)}</h6>
            <h6>
              {getLocalRaceDate(
                preSeasonInformation.date,
                preSeasonInformation.time
              )}
            </h6>
            <CircleFlag
              countryCode={preSeasonInformation.country}
              height={100}
            />
            <p></p>
            <ClockCoutdown
              date={preSeasonInformation.date}
              time={preSeasonInformation.time}
            />
          </Row>
          <Row>
            <Link to="/schedule">
              <Button className="main-btn" variant="secondary">
                2022 SEASON CALENDAR
              </Button>
            </Link>
          </Row>
        </>
      }
      cardHeight="32rem"
    />
  );
};

export default PreSeasonTesting;
