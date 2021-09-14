import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage"));
const RaceResult = lazy(() => import("./pages/RaceResult"));
const SeasonRaces = lazy(() => import("./pages/SeasonRaces"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const StandingsPage = lazy(() => import("./pages/StandingsPage"));
const DriverPage = lazy(() => import("./pages/DriverPage"));

function App() {
  useEffect(() => {
    function refreshLocalStorage() {
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);

      const nextWednesday = nextDay(3);
      const nextUpdateDate = localStorage.getItem("nextUpdate");

      if (!nextUpdateDate) {
        localStorage.setItem("nextUpdate", nextWednesday);
      }

      if (nextUpdateDate && todayDate.getTime() > nextWednesday.getTime()) {
        localStorage.clear();
        localStorage.setItem("nextUpdate", nextWednesday);
      }
    }

    function nextDay(x) {
      var now = new Date();
      now.setDate(now.getDate() + ((x + (7 - now.getDay())) % 7));
      now.setHours(0, 0, 0, 0);
      return now;
    }

    refreshLocalStorage();
  }, []);

  return (
    <Suspense fallback={null}>
      <Router basename="/">
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route
            path="/race/:season/:round"
            exact={true}
            component={RaceResult}
          />
          <Route path="/driver/:driverId" exact={true} component={DriverPage} />
          <Route path="/schedule" exact={true} component={SeasonRaces} />
          <Route path="/error" exact={true} component={ErrorPage} />
          <Route path="/standings" exact={true} component={StandingsPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
