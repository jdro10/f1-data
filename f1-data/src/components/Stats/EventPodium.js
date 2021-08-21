import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EventPodium = ({ eventClassification }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
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
                  <h3>{eventClassification[1].Driver.nationality}</h3>
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
                      : eventClassification[1].Q3}
                  </h3>
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
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
                  <h3>{eventClassification[0].Driver.nationality}</h3>
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
                      : eventClassification[0].Q3}
                  </h3>
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
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
                  <h3>{eventClassification[2].Driver.nationality}</h3>
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
                    {eventClassification[3].hasOwnProperty("Time")
                      ? eventClassification[3].Time.time
                      : eventClassification[3].Q3}
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

export default EventPodium;
