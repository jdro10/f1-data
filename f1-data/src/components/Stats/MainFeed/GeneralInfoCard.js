import React from "react";
import Countdown from "react-countdown";
import GenericCard from "../../Cards/GenericCard";
import { CircularProgressbar } from "react-circular-progressbar";

const GeneralInfoCard = ({ previousRaceData, nextRaceData, totalNumberOfRaces }) => {
  return (
    <GenericCard
      cardTitle="Round"
      cardBody={
        <div style={{ width: 150, height: 100 }}>
          <CircularProgressbar
            value={(previousRaceData.round * 100) / totalNumberOfRaces}
            text={previousRaceData.round + "/" + totalNumberOfRaces}
          />
        </div>
      }
      cardFooter={
        <h4>
          Next race:{" "}
          <Countdown
            date={
              Date.now() +
              (new Date(nextRaceData.date).getTime() +
                nextRaceData.time.split(":")[0] * 3600000 -
                new Date().getTime())
            }
          />
        </h4>
      }
      cardHeight="18rem"
    ></GenericCard>
  );
};

export default GeneralInfoCard;
