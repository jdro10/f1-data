import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import RaceClassification from "../Classifications/RaceClassification";
import QualifyingClassification from "../Classifications/QualifyingClassification";
import RaceInformation from "./RaceInformation";
import Circuit from "../Circuit/Circuit";
import Row from "react-bootstrap/Row";
import ClockCountdown from "../Countdown/ClockCountdown";
import Laps from "../Laps/Laps";

const Event = ({ raceInfo, raceClassification, qualifyingClassification }) => {
  return (
    <Tabs
      defaultActiveKey="race"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab tabClassName="tab-style" eventKey="race" title="RACE">
        <RaceInformation
          raceInfo={raceInfo}
          eventCountryCode={raceInfo.Circuit.Location.country}
        />

        {raceClassification != null ? (
          <div style={{ marginTop: "20px" }}>
            <RaceClassification raceClassification={raceClassification} />
          </div>
        ) : (
          <Row className="justify-content-center text-center">
            <p></p>
            <ClockCountdown date={raceInfo.date} time={raceInfo.time} />
          </Row>
        )}
      </Tab>

      {raceClassification != null && raceInfo.season >= 1996 ? (
        <Tab tabClassName="tab-style" eventKey="laps" title="LAPS">
          <div style={{ minHeight: "300px" }}>
            <Laps season={raceInfo.season} round={raceInfo.round} />
          </div>
        </Tab>
      ) : null}

      {qualifyingClassification != null ? (
        <Tab tabClassName="tab-style" eventKey="qualifying" title="QUALIFYING">
          <QualifyingClassification
            qualifyingClassification={qualifyingClassification}
          />
        </Tab>
      ) : null}

      <Tab tabClassName="tab-style" eventKey="circuit" title="CIRCUIT">
        <Circuit
          raceInfo={raceInfo}
          eventCountryCode={raceInfo.Circuit.Location.country}
        />
      </Tab>
    </Tabs>
  );
};

export default Event;
