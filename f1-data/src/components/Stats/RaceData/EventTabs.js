import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import RaceClassification from "../Classifications/RaceClassification";
import RaceQualifying from "../Classifications/RaceQualifying";
import RaceTab from "./RaceTab";
import CircuitTab from "./CircuitTab";
import Row from "react-bootstrap/Row";
import ClockCountdown from "../../Countdown/ClockCountdown";

const EventTabs = ({ raceInfo, raceClassification, raceQualifying }) => {
  const [eventCountryCode, setEventCountryCode] = useState(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      await fetch(
        `https://restcountries.eu/rest/v2/name/${raceInfo.Circuit.Location.country}?fullText=true`
      )
        .then((res) => res.json())
        .then((result) => {
          setEventCountryCode(result[0].alpha2Code.toLowerCase());
        })
        .catch((error) => setEventCountryCode(null));
    };

    fetchCountryCode();
  }, [raceInfo.Circuit.Location.country]);

  return (
    <div>
      <Tabs
        defaultActiveKey="race"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="race" title="Race">
          <Container style={{ minHeight: "250px" }}>
            <RaceTab raceInfo={raceInfo} eventCountryCode={eventCountryCode} />
          </Container>
          {raceClassification != null ? (
            <RaceClassification raceClassification={raceClassification} />
          ) : (
            <Row className="justify-content-center text-center">
              <ClockCountdown date={raceInfo.date} time={raceInfo.time} />
            </Row>
          )}
        </Tab>

        <Tab eventKey="circuit" title="Circuit">
          <Container style={{ minHeight: "500px" }}>
            <CircuitTab
              raceInfo={raceInfo}
              eventCountryCode={eventCountryCode}
            />
          </Container>
        </Tab>

        {raceQualifying != null ? (
          <Tab eventKey="qualifying" title="Qualifying">
            <RaceQualifying raceQualifying={raceQualifying} />
          </Tab>
        ) : null}
      </Tabs>
    </div>
  );
};

export default EventTabs;
