import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import RaceClassification from "../Classifications/RaceClassification";
import RaceQualifying from "../Classifications/RaceQualifying";
import RaceTab from "./RaceTab";
import CircuitTab from "./CircuitTab";
import Row from "react-bootstrap/Row";
import ClockCountdown from "../../Countdown/ClockCountdown";

const EventTabs = ({ raceInfo, raceClassification, raceQualifying }) => {
  return (
    <div>
      <Tabs
        defaultActiveKey="race"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab tabClassName="tab-style" eventKey="race" title="RACE">
          <RaceTab
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

        <Tab tabClassName="tab-style" eventKey="circuit" title="CIRCUIT">
          <CircuitTab
            raceInfo={raceInfo}
            eventCountryCode={raceInfo.Circuit.Location.country}
          />
        </Tab>

        {raceQualifying != null ? (
          <Tab
            tabClassName="tab-style"
            eventKey="qualifying"
            title="QUALIFYING"
          >
            <RaceQualifying raceQualifying={raceQualifying} />
          </Tab>
        ) : null}
      </Tabs>
    </div>
  );
};

export default EventTabs;
