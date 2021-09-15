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
    function refreshCache() {
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);

      const tomorrowDate = new Date(todayDate);
      tomorrowDate.setDate(todayDate.getDate() + 1);
      tomorrowDate.setHours(0, 0, 0, 0);

      const nextUpdateDate = localStorage.getItem("nextUpdate");

      if (!nextUpdateDate) {
        localStorage.setItem("nextUpdate", tomorrowDate);
      }

      if (
        nextUpdateDate &&
        todayDate.getTime() >= new Date(nextUpdateDate).getTime()
      ) {
        localStorage.clear();
        localStorage.setItem("nextUpdate", tomorrowDate);
        caches.keys().then(function (cacheNames) {
          cacheNames.forEach(function (cacheName) {
            caches.delete(cacheName);
          });
        });
      }
    }

    refreshCache();
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
