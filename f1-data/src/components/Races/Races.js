import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RaceInfo from "./RaceInfo";
import SyncLoader from "react-spinners/SyncLoader";

const Races = () => {
  const [season, setSeason] = useState("2021");
  const [seasonSchedule, setSeasonSchedule] = useState(null);
  const [loadingSeasonSchedule, setLoadingSchedule] = useState(true);

  useEffect(() => {
    const fetchSeasonSchedule = async () => {
      const response = await fetch(`http://ergast.com/api/f1/${season}.json`);
      const data = await response.json();

      setSeasonSchedule(data.MRData.RaceTable.Races);
      setLoadingSchedule(false);
    };

    fetchSeasonSchedule();
  }, [season]);

  return (
    <div>
      <Container>
        {loadingSeasonSchedule ? (
          <Container style={{ marginTop: "2%", minHeight: "700px" }}>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <SyncLoader color="black" loading="true" size={20} />
              </Col>
            </Row>
          </Container>
        ) : (
          <div>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h1>Formula One - {season} season</h1>
              </Col>
            </Row>
            <Accordion flush>
              {seasonSchedule.map((race, index) => (
                <Accordion.Item eventKey={index} index={index}>
                  <Accordion.Header>
                    #{race.round + " " + race.raceName}
                  </Accordion.Header>
                  <Accordion.Body>
                    <RaceInfo race={race} />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Races;
