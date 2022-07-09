import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RaceInformation from "./RaceInformation";
import Spinner from "react-bootstrap/Spinner";
import Dropdown from "react-bootstrap/Dropdown";
import "./Styles.css";
import "../SharedStyles/Table.css";
import Table from "react-bootstrap/Table";
import { config } from "../../data/config";
import { ThemeContext } from "../../helpers/ThemeContext";

const Calendar = () => {
  const { theme } = useContext(ThemeContext);
  const [season, setSeason] = useState(
    sessionStorage.getItem("seasonScheduleInput") !== null
      ? sessionStorage.getItem("seasonScheduleInput")
      : config.current_season
  );
  const [seasonSchedule, setSeasonSchedule] = useState(null);
  const [seasonsYearsList, setSeasonsYearsList] = useState(null);
  const [loadingSeasonSchedule, setLoadingSchedule] = useState(true);

  useEffect(() => {
    const fetchSeasonSchedule = async () => {
      await fetch(`https://ergast.com/api/f1/${season}.json`)
        .then((res) => res.json())
        .then((result) => {
          setSeasonSchedule(result.MRData.RaceTable.Races);
          setLoadingSchedule(false);
        });
    };

    fetchSeasonSchedule();
    setSeasonsYearsList(
      Array(config.current_season - config.first_season + 1)
        .fill()
        .map((_, i) => config.first_season + i)
        .reverse()
    );
  }, [season]);

  const seasonYearChange = (text) => {
    setSeason(text);
    sessionStorage.setItem("seasonScheduleInput", text);
    setLoadingSchedule(true);
  };

  return (
    <Container style={{ minHeight: "650px" }}>
      {loadingSeasonSchedule ? (
        <Row className="justify-content-center text-center">
          <h1>{season} FORMULA 1</h1>
          <Spinner animation="border" />
        </Row>
      ) : (
        <>
          <Row className="justify-content-center text-center">
            <h1>{season} FORMULA 1</h1>
          </Row>

          <Row
            className="justify-content-center text-center"
            style={{ marginBottom: "5px" }}
          >
            <Dropdown>
              <Dropdown.Toggle
                className="main-btn"
                id="dropdown-basic"
                variant="secondary"
              >
                {season}
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu">
                {seasonsYearsList.map((season, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={(e) => seasonYearChange(e.target.textContent)}
                  >
                    {season}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Row>

          <Row>
            <Table
              className="standings-table table-striped"
              responsive
              variant={theme}
            >
              <tbody>
                {seasonSchedule.map((race, index) => (
                  <tr key={index}>
                    <td>
                      <RaceInformation race={race} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Calendar;
