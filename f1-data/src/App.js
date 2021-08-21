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
        <Route path="/home" component={HomePage} />
        <Route path="/race/:season/:round" component={RaceResult} />
        <Route path="/schedule" component={SeasonSchedule} />
      </Switch>
    </Router>
  );
}

export default App;
