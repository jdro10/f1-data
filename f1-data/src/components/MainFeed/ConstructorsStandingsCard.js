import React from "react";
import Row from "react-bootstrap/Row";
import GenericCard from "../Cards/GenericCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ConstructorsStandings from "../Standings/ConstructorsStandings";

const ConstructorsStandingsCard = ({ constructorsStandings, season }) => {
  return (
        <GenericCard
          cardBody={
            <>
              <Row className="text-center">
                <h5>CONSTRUCTORS' STANDINGS</h5>
              </Row>
              <Row>
                <ConstructorsStandings
                  style={{
                    overflow: "hidden",
                    overflowY: "scroll",
                    height: "415px",
                  }}
                  constructorsStandings={constructorsStandings}
                  constructorSeason={season}
                  showEngine={false}
                />
              </Row>
              <Row>
                <Link style={{ marginTop: "20px" }} to="/standings">
                  <Button className="red-btn" variant="danger">
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

export default ConstructorsStandingsCard;
