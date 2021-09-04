import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage"));
const RaceResult = lazy(() => import("./pages/RaceResult"));
const SeasonRaces = lazy(() => import("./pages/SeasonRaces"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const StandingsPage = lazy(() => import("./pages/StandingsPage"));

function App() {
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
