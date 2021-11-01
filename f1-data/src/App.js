import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "./helpers/ThemeContext";
import { lightTheme, darkTheme, GlobalStyles } from "./themes/Themes";

const HomePage = lazy(() => import("./pages/HomePage"));
const RaceResult = lazy(() => import("./pages/RaceResult"));
const SeasonRaces = lazy(() => import("./pages/SeasonCalendar"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const StandingsPage = lazy(() => import("./pages/StandingsPage"));
const DriverPage = lazy(() => import("./pages/DriverPage"));

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme")
      : "light"
  );

  useEffect(() => {
    function refreshCache() {
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);

      const date = nextMonday();
      const nextUpdateDate = localStorage.getItem("nextUpdate");

      if (!nextUpdateDate) {
        localStorage.setItem("nextUpdate", date);
      }

      if (
        nextUpdateDate &&
        todayDate.getTime() >= new Date(nextUpdateDate).getTime()
      ) {
        localStorage.setItem("nextUpdate", date);

        caches.keys().then(function (cacheNames) {
          cacheNames.forEach(function (cacheName) {
            caches.delete(cacheName);
          });
        });

        window.location.reload();
      }
    }

    function nextMonday() {
      var date = new Date();

      date.setDate(date.getDate() + ((7 - date.getDay()) % 7) + 1);
      date.setHours(0, 0, 0, 0);

      return date;
    }

    refreshCache();
  }, []);

  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <Router basename="/">
              <Switch>
                <Route path="/" exact={true} component={HomePage} />

                <Route
                  path="/race/:season/:round"
                  exact={true}
                  component={RaceResult}
                />

                <Route
                  path="/driver/:driverId"
                  exact={true}
                  component={DriverPage}
                />
                <Route path="/schedule" exact={true} component={SeasonRaces} />

                <Route path="/error" exact={true} component={ErrorPage} />

                <Route
                  path="/standings"
                  exact={true}
                  component={StandingsPage}
                />

                <Route component={ErrorPage} />
              </Switch>
            </Router>
          </ThemeContext.Provider>
        </StyledApp>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
