import React, { useContext } from "react";
import TeamColor from "../TeamColor/TeamColor";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiPodium } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import { SiFastly } from "react-icons/si";
import { GiRaceCar } from "react-icons/gi";
import { ThemeContext } from "../../helpers/ThemeContext";
import { FaStopwatch } from "react-icons/fa";
import "../SharedStyles/Table.css";

const boldFont = {
  fontWeight: "600",
  fontSize: "25px",
};

const fontSize = {
  fontSize: "25px",
};

const ProfileStats = ({ stats, firstGP, lastGP }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Row className="justify-content-center">
        <Table responsive className="standings-table" variant={theme}>
          <tbody>
            <tr>
              <td style={boldFont}>First team</td>
              <td className="text-end" style={fontSize}>
                <Row className="justify-content-end text-end">
                  <Col xs="auto">
                    <TeamColor
                      constructorId={
                        firstGP.Results[0].Constructor.constructorId
                      }
                      height="42px"
                    />
                  </Col>
                  <Col xs="auto">{firstGP.Results[0].Constructor.name}</Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td style={boldFont}>Current/Last team</td>
              <td className="text-end" style={fontSize}>
                <Row className="justify-content-end text-end">
                  <Col xs="auto">
                    <TeamColor
                      constructorId={
                        lastGP.Results[0].Constructor.constructorId
                      }
                      height="42px"
                    />
                  </Col>
                  <Col xs="auto">{lastGP.Results[0].Constructor.name}</Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td style={boldFont}>Wins</td>
              <td className="text-end" style={fontSize}>
                {stats.wins} <GiPodiumWinner />
              </td>
            </tr>
            <tr>
              <td style={boldFont}>Podiums</td>
              <td className="text-end" style={fontSize}>
                {stats.podiums} <GiPodium />
              </td>
            </tr>
            <tr>
              <td style={boldFont}>Fastest laps</td>
              <td className="text-end" style={fontSize}>
                {stats.totalFastestLaps} <FaStopwatch />
              </td>
            </tr>
            <tr>
              <td style={boldFont}>Pole positions</td>
              <td className="text-end" style={fontSize}>
                {stats.poles} <SiFastly />
              </td>
            </tr>
            <tr>
              <td style={boldFont}>Total points</td>
              <td className="text-end" style={fontSize}>
                {stats.totalPoints} <GiRaceCar size={30} />
              </td>
            </tr>
            <tr>
              <td style={boldFont}>Total GPs entered</td>
              <td className="text-end" style={fontSize}>
                {stats.totalGrandPrix} <GiRaceCar size={30} />
              </td>
            </tr>
            <tr>
              <td style={boldFont}>First GP</td>
              <td className="text-end" style={fontSize}>
                {firstGP.raceName} {firstGP.season}
              </td>
            </tr>
            <tr>
              <td style={boldFont}>Last GP</td>
              <td className="text-end" style={fontSize}>
                {lastGP.raceName + " " + lastGP.season}
              </td>
            </tr>
            <tr>
              <td style={boldFont}>Total laps raced</td>
              <td className="text-end" style={fontSize}>
                {stats.totalLapsRaced} <GiRaceCar size={30} />
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default ProfileStats;
