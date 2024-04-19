import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { ThemeContext } from "../../helpers/ThemeContext";
import { convertDate, getLocalRaceDate } from "../../helpers/Helpers";

const FutureRaceDetails = ({ raceInfo }) => {
  const { theme } = useContext(ThemeContext);

  const eventMonth = (date) => {
    return new Date(date).toLocaleString("en-UK", {
      month: "long",
    });
  };

  const eventStartDate = (date) => {
    return convertDate(date).split("/")[0];
  };

  return (
    <Table
      responsive
      className="standings-table table-striped"
      variant={theme}
      style={{ marginTop: "5%" }}
    >
      <tbody>
        <tr>
          <td className="row-stats">RACE:</td>
          <td className="text-end row-stats">
            {eventStartDate(raceInfo.date)} {eventMonth(raceInfo.date)}{" "}
            {getLocalRaceDate(raceInfo.date, raceInfo.time)}
          </td>
        </tr>
        {raceInfo.Sprint === undefined ? (
          <>
            <tr>
              <td className="row-stats">QUALIFYING: </td>
              {raceInfo.Qualifying === undefined ? (
                <td className="text-end row-stats">-</td>
              ) : (
                <td className="text-end row-stats">
                  {eventStartDate(raceInfo.Qualifying?.date)}{" "}
                  {eventMonth(raceInfo.Qualifying.date)}{" "}
                  {getLocalRaceDate(
                    raceInfo.Qualifying.date,
                    raceInfo.Qualifying.time
                  )}
                </td>
              )}
            </tr>
            <tr>
              <td className="row-stats">FREE PRACTICE 3: </td>
              {raceInfo.ThirdPractice === undefined ? (
                <td className="text-end row-stats">-</td>
              ) : (
                <td className="text-end row-stats">
                  {eventStartDate(raceInfo.ThirdPractice.date)}{" "}
                  {eventMonth(raceInfo.ThirdPractice.date)}{" "}
                  {getLocalRaceDate(
                    raceInfo.ThirdPractice.date,
                    raceInfo.ThirdPractice.time
                  )}
                </td>
              )}
            </tr>
            <tr>
              <td className="row-stats">FREE PRACTICE 2: </td>
              {raceInfo.SecondPractice === undefined ? (
                <td className="text-end row-stats">-</td>
              ) : (
                <td className="text-end row-stats">
                  {eventStartDate(raceInfo.SecondPractice.date)}{" "}
                  {eventMonth(raceInfo.SecondPractice.date)}{" "}
                  {getLocalRaceDate(
                    raceInfo.SecondPractice.date,
                    raceInfo.SecondPractice.time
                  )}
                </td>
              )}
            </tr>
          </>
        ) : (
          <>
            <tr>
              <td className="row-stats">QUALIFYING: </td>
              {raceInfo.Qualifying === undefined ? (
                <td className="text-end row-stats">-</td>
              ) : (
                <td className="text-end row-stats">
                  {eventStartDate(raceInfo.Qualifying.date)}{" "}
                  {eventMonth(raceInfo.Qualifying.date)}{" "}
                  {getLocalRaceDate(
                    raceInfo.Qualifying.date,
                    raceInfo.Qualifying.time
                  )}
                </td>
              )}
            </tr>
            <tr>
              <td className="row-stats">SPRINT: </td>
              {raceInfo.Sprint === undefined ? (
                <td className="text-end row-stats">-</td>
              ) : (
                <td className="text-end row-stats">
                  {eventStartDate(raceInfo.Sprint.date)}{" "}
                  {eventMonth(raceInfo.Sprint.date)}{" "}
                  {getLocalRaceDate(raceInfo.Sprint.date, raceInfo.Sprint.time)}
                </td>
              )}
            </tr>

            <tr>
              <td className="row-stats">SPRINT QUALIFYING: </td>
              {raceInfo.SecondPractice === undefined ? (
                <td className="text-end row-stats">-</td>
              ) : (
                <td className="text-end row-stats">
                  {eventStartDate(raceInfo.SecondPractice.date)}{" "}
                  {eventMonth(raceInfo.SecondPractice.date)}{" "}
                  {getLocalRaceDate(
                    raceInfo.SecondPractice.date,
                    raceInfo.SecondPractice.time
                  )}
                </td>
              )}
            </tr>
          </>
        )}
        <tr>
          <td className="row-stats">FREE PRACTICE 1: </td>
          {raceInfo.FirstPractice === undefined ? (
            <td className="text-end row-stats">-</td>
          ) : (
            <td className="text-end row-stats">
              {eventStartDate(raceInfo.FirstPractice.date)}{" "}
              {eventMonth(raceInfo.FirstPractice.date)}{" "}
              {getLocalRaceDate(
                raceInfo.FirstPractice.date,
                raceInfo.FirstPractice.time
              )}
            </td>
          )}
        </tr>
      </tbody>
    </Table>
  );
};

export default FutureRaceDetails;
