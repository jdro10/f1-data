import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import { LineColors } from "../../data/LineColors";
import MediaQuery from "react-responsive";
import { ThemeContext } from "../../helpers/ThemeContext";

const Laps = ({ season, round }) => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState({ labels: null, datasets: null });
  const [loadingLaps, setLoadingLaps] = useState(true);

  useEffect(() => {
    const fetchLaps = async () => {
      await fetch(
        `https://ergast.com/api/f1/${season}/${round}/laps.json?limit=2000`
      )
        .then((res) => res.json())
        .then((result) => lapsPerDriver(result.MRData.RaceTable.Races[0].Laps));
    };

    fetchLaps();
  }, [season, round]);

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      y: {
        reverse: true,
        ticks: {
          color: theme === "dark" ? "white" : "dark",
          font: {
            size: 20,
          },
          stepSize: 1,
        },
        grid: {
          color: "#777",
        },
      },
      x: {
        ticks: {
          color: theme === "dark" ? "white" : "dark",
          font: {
            size: 20,
          },
        },
        grid: {
          color: "#777",
        },
      },
    },
  };

  const optionsMobile = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      y: {
        reverse: true,
        ticks: {
          color: theme === "dark" ? "white" : "dark",
          font: {
            size: 10,
          },
          stepSize: 1,
        },
        grid: {
          color: "#777",
        },
      },
      x: {
        ticks: {
          color: theme === "dark" ? "white" : "dark",
          font: {
            size: 10,
          },
        },
        grid: {
          color: "#777",
        },
      },
    },
  };

  const lapsPerDriver = (laps) => {
    const lapsObj = {};
    const lapsNumber = [];

    laps.forEach((lap) => {
      lapsNumber.push(parseInt(lap.number));

      lap.Timings.forEach((driver) => {
        if (!lapsObj[driver.driverId]) {
          lapsObj[driver.driverId] = [];
        }

        lapsObj[driver.driverId].push(driver.position);
      });
    });

    const datasets = [];
    var position = 1;

    for (const [key, value] of Object.entries(lapsObj)) {
      const data = {
        label: key,
        data: value,
        fill: false,
        backgroundColor: LineColors[position],
        borderColor: LineColors[position],
      };

      datasets.push(data);
      position++;
    }

    setData({ labels: lapsNumber, datasets: datasets });
    setLoadingLaps(false);
  };

  return (
    <>
      {loadingLaps ? null : (
        <>
          <MediaQuery minWidth={1224}>
            <Line data={data} height={325} width={500} options={options} />
          </MediaQuery>
          <MediaQuery maxWidth={1224}>
            <Line
              data={data}
              height={850}
              width={500}
              options={optionsMobile}
            />
          </MediaQuery>
        </>
      )}
    </>
  );
};

export default Laps;
