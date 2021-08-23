import React from "react";
import Table from "react-bootstrap/Table";
import Flag from "react-world-flags";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";

const ConstructorsStandings = ({ style, constructorsStandings }) => {
  return (
    <div style={style}>
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
                  code={
                    CountriesCodeNationality[
                      constructor.Constructor.nationality
                    ]
                  }
                  height="15"
                  width="25"
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
