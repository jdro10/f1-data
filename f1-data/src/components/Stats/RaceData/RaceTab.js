import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircleFlag } from "react-circle-flags";
import { convertDate, getLocalRaceDate } from "../../../helpers/Helpers";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";

const RaceTab = ({ raceInfo, eventCountryCode }) => {
  return (
    <div>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <a className="race-link" href={raceInfo.url}>
            <h1>{raceInfo.raceName.toUpperCase()}</h1>
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <h3>{convertDate(raceInfo.date)}</h3>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <h3>
            {raceInfo.hasOwnProperty("time")
              ? getLocalRaceDate(raceInfo.date, raceInfo.time)
              : null}
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <CircleFlag
            countryCode={CountriesCodeNationality[
              eventCountryCode
            ].toLowerCase()}
            height="100"
          />
        </Col>
      </Row>
    </div>
  );
};

export default RaceTab;
