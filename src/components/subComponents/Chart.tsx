import axios from "axios";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

function Chart() {
  const [today, setToday] = useState("");
  const link = useSelector((state: any) => state.fund.value.link);

  const [chartData, setChartdata] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        fill: true,
        backgroundColor: "",
        borderColor: "",
      },
    ],
  });

  const chart = () => {
    let empSal: any = [];
    let empAge: any = [];

    axios
      .get(link)
      .then(function (response) {
        for (const dataObj of response.data.data) {
          empSal.push(dataObj.date);
          empAge.push(parseInt(dataObj.nav));
        }
        setToday(empAge.slice(0, 1));
        const nav = empAge.slice(0, 20);
        const dates = empSal.slice(0, 20);
        console.log(nav);
        console.log(dates);

        setChartdata({
          labels: dates.reverse(),
          datasets: [
            {
              label: "Nav",
              data: nav.reverse(),
              fill: true,
              backgroundColor: "rgb(145, 109, 109, 0.3)",
              borderColor: "rgba(145, 109, 109,1)",
            },
          ],
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      
      <h3>Rate Today: {today}</h3>
      <h3>Data based analysis(last 20 days): </h3>
      <Line data={chartData} />
    </div>
  );
}

export default Chart;
