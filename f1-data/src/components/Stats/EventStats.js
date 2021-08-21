import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import EventTabs from "./EventTabs";
import SyncLoader from "react-spinners/SyncLoader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RaceGeneralStats = ({ season, round }) => {
  const [raceInfo, setRaceInfo] = useState(null);
  const [raceClassification, setRaceClassification] = useState(null);
  const [raceQualifying, setRaceQualifying] = useState(null);
  const [loadingRaceResult, setLoadingRaceResult] = useState(true);
  const [loadingRaceQualifying, setLoadingRaceQualifying] = useState(true);

  useEffect(() => {
    const fetchRaceResult = async () => {
      const response = await fetch(
        `http://ergast.com/api/f1/${season}/${round}/results.json`
      );
      const data = await response.json();

      setRaceInfo({
        season: data.MRData.RaceTable.season,
        round: data.MRData.RaceTable.round,
        raceName: data.MRData.RaceTable.Races[0].raceName,
        circuitName: data.MRData.RaceTable.Races[0].Circuit.circuitName,
        circuitCountry: data.MRData.RaceTable.Races[0].Circuit.Location.country,
        circuitLocality:
          data.MRData.RaceTable.Races[0].Circuit.Location.locality,
        circuitLatitude: data.MRData.RaceTable.Races[0].Circuit.Location.lat,
        circuitLongitude: data.MRData.RaceTable.Races[0].Circuit.Location.long,
        raceDate: data.MRData.RaceTable.Races[0].date,
        raceTime: data.MRData.RaceTable.Races[0].time,
      });

      setRaceClassification(data.MRData.RaceTable.Races[0].Results);
      setLoadingRaceResult(false);
    };

    const fetchRaceQualifying = async () => {
      const response = await fetch(
        `http://ergast.com/api/f1/${season}/${round}/qualifying.json`
      );
      const data = await response.json();

      if(data.MRData.RaceTable.Races[0] === undefined){
        setRaceClassification(null);
      } else {
        setRaceQualifying(data.MRData.RaceTable.Races[0].QualifyingResults);
      }

      setLoadingRaceQualifying(false);
    };

    fetchRaceResult();
    fetchRaceQualifying();
  }, [season, round]);

  return (
    <div>
      <Container fluid="md">
        {loadingRaceResult || loadingRaceQualifying ? (
          <Container style={{ marginTop: "2%", minHeight: "700px" }}>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <SyncLoader color="black" loading="true" size={20} />
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <EventTabs
              raceInfo={raceInfo}
              raceClassification={raceClassification}
              raceQualifying={raceQualifying}
            />
          </Container>
        )}
      </Container>
    </div>
  );
};

export default RaceGeneralStats;
