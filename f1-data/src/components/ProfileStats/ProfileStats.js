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

const ProfileStats = ({ stats, firstGP, lastGP }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Row className="justify-content-center">
        <Table
          responsive
          className="standings-table table-striped"
          variant={theme}
        >
          <tbody>
            <tr>
              <td className="row-stats">First team</td>
              <td className="text-end row-stats">
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
              <td className="row-stats">Current/Last team</td>
              <td className="text-end row-stats">
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
              <td className="row-stats">Wins</td>
              <td className="text-end row-stats">
                {stats.wins} <GiPodiumWinner />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Podiums</td>
              <td className="text-end row-stats">
                {stats.podiums} <GiPodium />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Fastest laps</td>
              <td className="text-end row-stats">
                {stats.totalFastestLaps} <FaStopwatch />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Pole positions</td>
              <td className="text-end row-stats">
                {stats.poles} <SiFastly />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Total points</td>
              <td className="text-end row-stats">
                {stats.totalPoints} <GiRaceCar size={30} />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Total GPs entered</td>
              <td className="text-end row-stats">
                {stats.totalGrandPrix} <GiRaceCar size={30} />
              </td>
            </tr>
            <tr>
              <td className="row-stats">First GP</td>
              <td className="text-end row-stats">
                {firstGP.raceName} {firstGP.season}
              </td>
            </tr>
            <tr>
              <td className="row-stats">Last GP</td>
              <td className="text-end row-stats">
                {lastGP.raceName + " " + lastGP.season}
              </td>
            </tr>
            <tr>
              <td className="row-stats">Total laps raced</td>
              <td className="text-end row-stats">
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
