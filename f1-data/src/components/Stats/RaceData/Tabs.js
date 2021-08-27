import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import RaceClassification from "../Classifications/RaceClassification";
import RaceQualifying from "../Classifications/RaceQualifying";
import EventPodium from "./Podium";
import RaceTab from "./RaceTab";
import CircuitTab from "./CircuitTab";

const EventTabs = ({ raceInfo, raceClassification, raceQualifying }) => {
  const [eventCountryCode, setEventCountryCode] = useState(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      await fetch(
        `https://restcountries.eu/rest/v2/name/${raceInfo.circuitCountry}?fullText=true`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setEventCountryCode(data[0].alpha3Code);
        })
        .catch((error) => setEventCountryCode(null));
    };

    fetchCountryCode();
  }, [raceInfo.circuitCountry]);

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
            ""
          )}
        </Tab>
        <Tab eventKey="circuit" title="Circuit">
          <Container style={{ minHeight: "250px" }}>
            <CircuitTab
              raceInfo={raceInfo}
              eventCountryCode={eventCountryCode}
            />
          </Container>
          {raceClassification != null ? (
            <RaceClassification raceClassification={raceClassification} />
          ) : (
            ""
          )}
        </Tab>

        {raceClassification != null ? (
          <Tab eventKey="podium" title="Podium">
            <Container style={{ minHeight: "250px" }}>
              <EventPodium eventClassification={raceClassification} />
            </Container>
            <RaceClassification raceClassification={raceClassification} />
          </Tab>
        ) : (
          ""
        )}

        {raceQualifying != null ? (
          <Tab eventKey="qualifying" title="Qualifying">
            <Container style={{ minHeight: "250px" }}>
              <EventPodium eventClassification={raceQualifying} />
            </Container>
            <RaceQualifying raceQualifying={raceQualifying} />
          </Tab>
        ) : (
          ""
        )}
      </Tabs>
    </div>
  );
};

export default EventTabs;
