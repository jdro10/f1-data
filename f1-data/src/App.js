import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RaceResult from "./pages/RaceResult";
import SeasonSchedule from "./pages/SeasonSchedule";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/race/:season/:round" exact={true} component={RaceResult} />
        <Route path="/schedule" exact={true} component={SeasonSchedule} />
      </Switch>
    </Router>
  );
}

export default App;
