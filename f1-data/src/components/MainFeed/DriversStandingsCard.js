import React from "react";
import Row from "react-bootstrap/Row";
import GenericCard from "../Cards/GenericCard";
import { Link } from "react-router-dom";
import DriversStandings from "../Standings/DriversStandings";
import Button from "react-bootstrap/Button";

const DriversStandingsCard = ({ driversStandings }) => {
  return (
    <GenericCard
      cardBody={
        <>
          <Row className="text-center">
            <h5>DRIVERS' STANDINGS</h5>
          </Row>
          <Row>
            <DriversStandings
              style={{
                overflow: "hidden",
                overflowY: "scroll",
                height: "415px",
              }}
              driversStandings={driversStandings}
            />
          </Row>
          <Row>
            <Link to="/standings">
              <Button
                style={{ marginTop: "20px" }}
                className="red-btn"
                variant="danger"
              >
                FULL STANDINGS
              </Button>
            </Link>
          </Row>
        </>
      }
      cardHeight="34rem"
    />
  );
};

export default DriversStandingsCard;
