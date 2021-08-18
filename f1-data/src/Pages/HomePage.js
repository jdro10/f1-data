import React from "react";
import GenericCard from "../components/Cards/GenericCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DriversStandings from "../components/Stats/DriversStandings";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <GenericCard
              cardTitle="Season"
              cardBody={<h1>2021</h1>}
              cardHeight="15rem"
            ></GenericCard>
          </Col>
          <Col>
            <GenericCard
              cardTitle="Last race"
              cardBody={<h1>Hungarian Grand Prix</h1>}
              cardHeight="15rem"
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
              cardHeight="15rem"
            ></GenericCard>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <GenericCard
              cardTitle="Driver's standings"
              cardBody={<DriversStandings />}
              cardHeight="27rem"
            ></GenericCard>
          </Col>
          <Col>
            <GenericCard
              cardTitle="Construtors standings"
              cardBody={<DriversStandings />}
              cardHeight="27rem"
            ></GenericCard>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
