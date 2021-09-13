import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
// import { Redirect } from "react-router-dom";

const Driver = ({ driverId }) => {
  const [loading, setLoading] = useState(true);
  const [wikiPageId, setWikiPageId] = useState(null);
  const [driverPhoto, setDriverPhoto] = useState(true);
  const [driverInformation, setDriverInformation] = useState(null);

  useEffect(() => {
    const fetchDriverInformation = async () => {
      await fetch(`https://ergast.com/api/f1/drivers/${driverId}.json`)
        .then((res) => res.json())
        .then((result) => {
          const driverURL = result.MRData.DriverTable.Drivers[0].url;
          const driverName = driverURL.split("/")[4];

          return fetch(
            `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${driverName}&origin=*`,
            { method: "GET" }
          );
        })
        .then((res) => res.json())
        .then((result) => {
          setWikiPageId(Object.keys(result.query.pages));
          setDriverInformation(result.query.pages);

          return fetch(
            `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${result.query.normalized[0].from}&origin=*`
          );
        })
        .then((res) => res.json())
        .then((result) => {
          setDriverPhoto(result.query.pages);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };

    fetchDriverInformation();
  }, [driverId]);

  return (
    <Container style={{ minHeight: "500px" }}>
      {loading ? (
        <Row className="justify-content-center text-center">
          <Spinner animation="border" />
        </Row>
      ) : (
        <Row className="justify-content-center text-center">
          <h1>{driverInformation[wikiPageId]["title"]}</h1>
          <Col xs={3}>
            <img
              style={{ borderRadius: "50px" }}
              src={driverPhoto[wikiPageId]["original"]["source"]}
              width="250px"
              alt="driver"
            />
          </Col>
          <Col xs={9}>
            <p style={{ textAlign: "justify" }}>
              {driverInformation[wikiPageId]["extract"]} (Source:{" "}
              <a
                href={`https://en.wikipedia.org/wiki/${driverInformation[wikiPageId]["title"]}`}
              >
                Wikipedia)
              </a>
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Driver;
