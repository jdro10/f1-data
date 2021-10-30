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
import { GiCheckeredFlag } from "react-icons/gi";
import "../SharedStyles/Table.css";
import { useHistory } from "react-router-dom";

const DriverInformation = ({ stats, firstGP, lastGP }) => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  const teamRowClick = (wikiConstructorLink) => {
    window.open(wikiConstructorLink, "_blank");
  };

  const raceRowClick = (season, round) => {
    history.push(`/race/${season}/${round}`);
  };

  const getPercentage = (number, total) => {
    return Math.round((number / total) * 100 * 100) / 100;
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Table
          responsive
          className="standings-table table-striped table-hover"
          variant={theme}
        >
          <tbody>
            <tr>
              <td className="row-stats">Former team:</td>
              <td
                className="text-end clickable-row"
                onClick={() => teamRowClick(firstGP.Results[0].Constructor.url)}
              >
                <Row className="justify-content-end text-end g-2">
                  <Col className="align-self-center" xs="auto">
                    <TeamColor
                      constructorId={
                        firstGP.Results[0].Constructor.constructorId
                      }
                    />
                  </Col>
                  <Col xs="auto">{firstGP.Results[0].Constructor.name}</Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td className="row-stats">
                {parseInt(lastGP.season) !== new Date().getFullYear()
                  ? "Last team:"
                  : "Current team:"}
              </td>
              <td
                className="text-end clickable-row"
                onClick={() => teamRowClick(lastGP.Results[0].Constructor.url)}
              >
                <Row className="justify-content-end text-end g-2">
                  <Col className="align-self-center" xs="auto">
                    <TeamColor
                      constructorId={
                        lastGP.Results[0].Constructor.constructorId
                      }
                      height="30px"
                    />
                  </Col>
                  <Col xs="auto">{lastGP.Results[0].Constructor.name}</Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td className="row-stats">Grands Prix:</td>
              <td className="text-end row-stats">
                {stats.totalGrandPrix} <GiCheckeredFlag size={25} />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Wins:</td>
              <td className="text-end row-stats">
                {stats.wins} ({getPercentage(stats.wins, stats.totalGrandPrix)}
                %) <GiPodiumWinner />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Podiums:</td>
              <td className="text-end row-stats">
                {stats.podiums} (
                {getPercentage(stats.podiums, stats.totalGrandPrix)}%){" "}
                <GiPodium />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Fastest laps:</td>
              <td className="text-end row-stats">
                {stats.totalFastestLaps} (
                {getPercentage(stats.totalFastestLaps, stats.totalGrandPrix)}%)
                <FaStopwatch />
              </td>
            </tr>
            <tr>
              <td className="row-stats no-wrap">Pole positions:</td>
              <td className="text-end row-stats">
                {stats.poles} (
                {getPercentage(stats.poles, stats.totalGrandPrix)}
                %) <SiFastly />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Retirements:</td>
              <td className="text-end row-stats">
                {stats.dnf} ({getPercentage(stats.dnf, stats.totalGrandPrix)}
                %) <GiRaceCar size={22} />
              </td>
            </tr>
            <tr>
              <td className="row-stats">Total points:</td>
              <td className="text-end row-stats">
                {stats.totalPoints} <GiRaceCar size={22} />
              </td>
            </tr>
            <tr>
              <td className="row-stats">First race:</td>
              <td
                className="text-end clickable-row no-wrap"
                onClick={() => raceRowClick(firstGP.season, firstGP.round)}
              >
                {firstGP.raceName} {firstGP.season}
              </td>
            </tr>
            <tr>
              <td className="row-stats">
                {parseInt(lastGP.season) !== new Date().getFullYear()
                  ? "Last race:"
                  : "Latest race:"}
              </td>
              <td
                className="text-end clickable-row no-wrap"
                onClick={() => raceRowClick(lastGP.season, lastGP.round)}
              >
                {lastGP.raceName + " " + lastGP.season}
              </td>
            </tr>
            <tr>
              <td className="row-stats">Laps raced:</td>
              <td className="text-end row-stats">
                {stats.totalLapsRaced} <GiRaceCar size={22} />
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default DriverInformation;
