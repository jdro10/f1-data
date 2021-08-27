import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Flag from "react-world-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";

const Podium = ({ eventClassification }) => {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col
            xs={{ span: 12, order: "second" }}
            md={{ span: 4, order: "first" }}
          >
            <div id="secondPlace">
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h2>2nd</h2>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>
                    {eventClassification[1].number}{" "}
                    {eventClassification[1].Driver.givenName}{" "}
                    {eventClassification[1].Driver.familyName}
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Flag
                    code={
                      CountriesCodeNationality[
                        eventClassification[1].Driver.nationality
                      ]
                    }
                    height="30"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>{eventClassification[1].Constructor.name}</h3>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>
                    {eventClassification[1].hasOwnProperty("Time")
                      ? eventClassification[1].Time.time
                      : eventClassification[1].hasOwnProperty("status") &&
                        eventClassification[1].status !== "Finished"
                      ? eventClassification[1].status
                      : eventClassification[1].hasOwnProperty("Q3")
                      ? eventClassification[1].Q3
                      : eventClassification[1].Q1}
                  </h3>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            md={{ span: 4, order: "second" }}
          >
            <div id="firstPlace">
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h1>1st</h1>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>
                    {eventClassification[0].number}{" "}
                    {eventClassification[0].Driver.givenName}{" "}
                    {eventClassification[0].Driver.familyName}
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Flag
                    code={
                      CountriesCodeNationality[
                        eventClassification[0].Driver.nationality
                      ]
                    }
                    height="30"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>{eventClassification[0].Constructor.name}</h3>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>
                    {eventClassification[0].hasOwnProperty("Time")
                      ? eventClassification[0].Time.time
                      : eventClassification[0].hasOwnProperty("status") &&
                        eventClassification[0].status !== "Finished"
                      ? eventClassification[0].status
                      : eventClassification[0].hasOwnProperty("Q3")
                      ? eventClassification[0].Q3
                      : eventClassification[1].Q1}
                  </h3>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={{ span: 12, order: "last" }} md={{ span: 4, order: "last" }}>
            <div id="thirdPlace">
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>3rd</h3>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>
                    {eventClassification[2].number}{" "}
                    {eventClassification[2].Driver.givenName}{" "}
                    {eventClassification[2].Driver.familyName}
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Flag
                    code={
                      CountriesCodeNationality[
                        eventClassification[2].Driver.nationality
                      ]
                    }
                    height="30"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>{eventClassification[2].Constructor.name}</h3>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h3>
                    {eventClassification[2].hasOwnProperty("Time")
                      ? eventClassification[2].Time.time
                      : eventClassification[2].hasOwnProperty("status") &&
                        eventClassification[2].status !== "Finished"
                      ? eventClassification[2].status
                      : eventClassification[2].hasOwnProperty("Q3")
                      ? eventClassification[2].Q3
                      : eventClassification[1].Q1}
                  </h3>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Podium;
