import axios from "axios";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function Chart() {

const data = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Nav",
        data: [70, 101, 80, 108, 155, 136, 167, 200, 199, 178, 200, 206 ],
        fill: true,
        backgroundColor: "rgb(145, 109, 109, 0.3)",
        borderColor: "rgba(145, 109, 109,1)",
      },
    ],
  };

  const [chartData, setChartdata] = useState({});

  const chart = () => {
    let empSal: any = [];
    let empAge: any = [];

    axios
      .get("https://api.mfapi.in/mf/102414")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.nav));
          empAge.push(parseInt(dataObj.date));
        }
        setChartdata({
          labels: empAge,
          datasets: [
            {
              label: "salary",
              data: empSal,
              backgroundColor: ["black"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setChartdata({
      labels: empAge,
      datasets: [
        {
          label: "salary",
          data: empSal,
          backgroundColor: ["black"],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  
  return (
    <div>
      <h3>Data based analysis: </h3>
      <Line data={data} />
    </div>
  );
}

export default Chart;
