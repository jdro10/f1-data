import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RaceInformation from "./RaceInformation";
import Spinner from "react-bootstrap/Spinner";
import Dropdown from "react-bootstrap/Dropdown";
import "./Styles.css";
import "../SharedStyles/Table.css";
import Table from "react-bootstrap/Table";
import { ThemeContext } from "../../helpers/ThemeContext";

const Calendar = () => {
  const { theme } = useContext(ThemeContext);
  const FIRST_SEASON = 1950;
  const [season, setSeason] = useState(
    sessionStorage.getItem("seasonScheduleInput") !== null
      ? sessionStorage.getItem("seasonScheduleInput")
      : "2021"
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
      Array("2021" - FIRST_SEASON + 1)
        .fill()
        .map((_, i) => FIRST_SEASON + i)
        .reverse()
    );
  }, [season]);

  const seasonYearChange = (text) => {
    setSeason(text);
    sessionStorage.setItem("seasonScheduleInput", text);
    setLoadingSchedule(true);
  };

  return (
    <>
      {loadingSeasonSchedule ? (
        <Container style={{ minHeight: "500px" }}>
          <Row className="justify-content-center text-center">
            <h1>{season} FORMULA 1</h1>
            <Spinner animation="border" />
          </Row>
        </Container>
      ) : (
        <Container>
          <Row className="justify-content-center text-center">
            <Col>
              <h1>{season} FORMULA 1</h1>
            </Col>
          </Row>
          <Row
            className="justify-content-center text-center"
            style={{ marginBottom: "2%" }}
          >
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant="danger"
                  className="red-btn"
                  id="dropdown-basic"
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
            </Col>
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
        </Container>
      )}
    </>
  );
};

export default Calendar;
