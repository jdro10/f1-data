import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

const Schedule = () => {
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
          <p>loading</p>
        ) : (
          <div>
            <h1>Formula 1 - {season} season</h1>
            <Accordion flush>
              {seasonSchedule.map((race, index) => (
                <Accordion.Item eventKey={index} index={index}>
                  <Accordion.Header>
                    #{race.round + " " + race.raceName}
                  </Accordion.Header>
                  <Accordion.Body>
                    <h1>Race</h1>
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

export default Schedule;
