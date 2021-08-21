import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Map from "../Map/Map";
import { FaMedal } from "react-icons/fa";
import Flag from "react-world-flags";
import RaceClassification from "./RaceClassification";

const EventTabs = ({ raceInfo, raceClassification }) => {
  const [eventCountryCode, setEventCountryCode] = useState(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${raceInfo.circuitCountry}?fullText=true`
      );
      const data = await response.json();

      setEventCountryCode(data[0].alpha3Code);
    };

    fetchCountryCode();
  }, []);

  return (
    <div>
      <Tabs
        defaultActiveKey="race"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="race" title="Race">
          <Container style={{ minHeight: "250px" }}>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h1>{raceInfo.raceName}</h1>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h3>
                  {raceInfo.raceDate +
                    " " +
                    raceInfo.raceTime.substring(
                      0,
                      raceInfo.raceTime.length - 1
                    )}
                </h3>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Flag code={eventCountryCode} height="30" />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <RaceClassification raceClassification={raceClassification} />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="circuit" title="Circuit">
          <Row>
            <Col>
              <h1>{raceInfo.circuitName}</h1>
              <h3>{raceInfo.circuitCountry}</h3>
              <h3>{raceInfo.circuitLocality}</h3>
              <Flag code={eventCountryCode} height="30" />
            </Col>
            <Col>
              <Map
                coordinates={[
                  raceInfo.circuitLatitude,
                  raceInfo.circuitLongitude,
                ]}
              ></Map>
            </Col>
          </Row>
          <Row>
            <Col>
              <RaceClassification raceClassification={raceClassification} />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="podium" title="Podium">
          <Row>
            <Col>
              <RaceClassification raceClassification={raceClassification} />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="qualifying" title="Qualifying">
          <Row>
            <Col>
              <RaceClassification raceClassification={raceClassification} />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default EventTabs;
