"use client";
import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
}

const RadialBarChart = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        polar: true,
        type: "column",
        inverted: true,
      },
      title: {
        text: "Radial Bar Chart Example",
      },
      pane: {
        size: "85%",
      },
      xAxis: {
        categories: ["A", "B", "C", "D", "E", "F"],
        tickmarkPlacement: "on",
        lineWidth: 0,
      },
      yAxis: {
        gridLineInterpolation: "circle",
        min: 0,
        max: 100,
        tickInterval: 100,
      },
      series: [
        {
          name: "Values",
          data: [36, 30, 30, 30, 30, 30],
          pointPlacement: "on",
          colorByPoint: true,
          colors: ["#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e3a8a"],
        },
      ],
      plotOptions: {
        series: {
          pointPadding: 0,
          groupPadding: 0,
          dataLabels: {
            enabled: true,
            format: "{y}%",
          },
        },
      },
    });
  }, []);

  return (
    <div
      id="container"
      style={{ width: "500px", height: "500px", margin: "0 auto" }}
    ></div>
  );
};

export default RadialBarChart;
