import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SyncLoader from "react-spinners/SyncLoader";
import "./Table.css";
import Flag from "react-world-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";

const ConstructorsStandings = () => {
  const [constructorsStandings, setConstructorsStandings] = useState(null);
  const [loadingConstructorsStandings, setLoadingConstructorsStandings] =
    useState(true);

  useEffect(() => {
    const fetchConstructorsStandings = async () => {
      const response = await fetch(
        `http://ergast.com/api/f1/current/constructorStandings.json`
      );
      const data = await response.json();

      setConstructorsStandings(
        data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      );
      setLoadingConstructorsStandings(false);
    };

    fetchConstructorsStandings();
  }, []);

  return (
    <div className="table">
      {loadingConstructorsStandings ? (
        <Container>
          <Row className="justify-content-md-center">
          <SyncLoader color="black" loading="true" size={10} />
          </Row>
        </Container>
      ) : (
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Position</th>
              <th>Nationality</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {constructorsStandings.map((constructor, index) => (
              <tr key={index}>
                <td>{constructor.position}</td>
                <td>
                  <Flag
                    code={CountriesCodeNationality[constructor.Constructor.nationality]}
                    height="15" width="25"
                  />
                </td>
                <td>{constructor.Constructor.name}</td>
                <td>{constructor.wins}</td>
                <td>{constructor.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ConstructorsStandings;
