import React from "react";
import GenericCard from "../components/Cards/GenericCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <GenericCard
            cardTitle="Season"
            cardBody={<h1>2021</h1>}
          ></GenericCard>
        </Col>
        <Col>
          <GenericCard
            cardTitle="Last race"
            cardBody={<h1>Hungarian Grand Prix</h1>}
          ></GenericCard>
        </Col>
        <Col>
          <GenericCard
            cardTitle="Round"
            cardBody={
              <div style={{ width: 120, height: 100 }}>
                <CircularProgressbar value={(11 * 100) / 23} text={"11/23"} />
              </div>
            }
          ></GenericCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <GenericCard cardTitle="Driver's standings" cardBody="2021"></GenericCard>
        </Col>
        <Col>
          <GenericCard cardTitle="Construtors standings" cardBody="2021"></GenericCard>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
