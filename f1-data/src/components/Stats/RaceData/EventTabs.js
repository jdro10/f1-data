import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import RaceClassification from "../Classifications/RaceClassification";
import RaceQualifying from "../Classifications/RaceQualifying";
import RaceTab from "./RaceTab";
import CircuitTab from "./CircuitTab";
import Row from "react-bootstrap/Row";
import ClockCountdown from "../../Countdown/ClockCountdown";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";

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
        .catch((error) => {
          setEventCountryCode(
            CountriesCodeNationality[
              raceInfo.Circuit.Location.country
            ].toLowerCase()
          );
        });
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
        <Tab tabClassName="tab-style" eventKey="race" title="RACE">
          <RaceTab raceInfo={raceInfo} eventCountryCode={eventCountryCode} />

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
          <CircuitTab raceInfo={raceInfo} eventCountryCode={eventCountryCode} />
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
