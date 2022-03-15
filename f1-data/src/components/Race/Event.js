import React from "react";
import RaceClassification from "../Classifications/RaceClassification";
import QualifyingClassification from "../Classifications/QualifyingClassification";
import RaceInformation from "./RaceInformation";
import Circuit from "../Circuit/Circuit";
import Row from "react-bootstrap/Row";
import ClockCountdown from "../Countdown/ClockCountdown";
import Laps from "../Laps/Laps";

const Event = ({
  raceInfo,
  raceClassification,
  qualifyingClassification,
  sprintClassification,
}) => {
  return (
    <>
      <ul
        className="nav nav-pills nav-fill mb-2"
        id="myTab"
        role="tablist"
        style={{ marginTop: "10px" }}
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="race-tab"
            data-bs-toggle="tab"
            data-bs-target="#race"
            type="button"
            role="tab"
            aria-controls="race"
            aria-selected="true"
          >
            RACE
          </button>
        </li>

        {raceClassification != null && raceInfo.season >= 1996 ? (
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="laps-tab"
              data-bs-toggle="tab"
              data-bs-target="#laps"
              type="button"
              role="tab"
              aria-controls="laps"
              aria-selected="false"
            >
              LAPS
            </button>
          </li>
        ) : null}

        {qualifyingClassification != null ? (
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="qualifying-tab"
              data-bs-toggle="tab"
              data-bs-target="#qualifying"
              type="button"
              role="tab"
              aria-controls="qualifying"
              aria-selected="false"
            >
              QUALIFYING
            </button>
          </li>
        ) : null}

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="circuit-tab"
            data-bs-toggle="tab"
            data-bs-target="#circuit"
            type="button"
            role="tab"
            aria-controls="circuit"
            aria-selected="false"
          >
            CIRCUIT
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="race"
          role="tabpanel"
          aria-labelledby="race-tab"
        >
          <RaceInformation
            raceInfo={raceInfo}
            eventCountryCode={raceInfo.Circuit.Location.country}
          />

          {raceClassification != null ? (
            <RaceClassification raceClassification={raceClassification} />
          ) : (
            <Row
              className="justify-content-center text-center"
              style={{ marginTop: "75px" }}
            >
              <ClockCountdown
                date={raceInfo.date}
                time={raceInfo.time}
                size="big"
              />
            </Row>
          )}
        </div>

        <div
          className="tab-pane fade"
          id="laps"
          role="tabpanel"
          aria-labelledby="laps-tab"
        >
          {raceClassification != null && raceInfo.season >= 1996 ? (
            <>
              <RaceInformation
                raceInfo={raceInfo}
                eventCountryCode={raceInfo.Circuit.Location.country}
              />
              <div style={{ minHeight: "300px" }}>
                <Laps season={raceInfo.season} round={raceInfo.round} />
              </div>
            </>
          ) : null}
        </div>

        <div
          className="tab-pane fade"
          id="qualifying"
          role="tabpanel"
          aria-labelledby="qualifying-tab"
        >
          {qualifyingClassification != null ? (
            <>
              <RaceInformation
                raceInfo={raceInfo}
                eventCountryCode={raceInfo.Circuit.Location.country}
              />

              <QualifyingClassification
                qualifyingClassification={qualifyingClassification}
                sprintClassification={sprintClassification}
              />
            </>
          ) : null}
        </div>

        <div
          className="tab-pane fade"
          id="circuit"
          role="tabpanel"
          aria-labelledby="circuit-tab"
        >
          <Circuit
            raceInfo={raceInfo}
            eventCountryCode={raceInfo.Circuit.Location.country}
          />
        </div>
      </div>
    </>
  );
};

export default Event;
