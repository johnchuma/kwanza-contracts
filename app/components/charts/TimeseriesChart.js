"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const TimeseriesChart = ({ xaxis, yaxis, ylabel, chartType }) => {
  const config = {
    options: {
      chart: {
        height: 70,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: xaxis ?? [],
        type: "datetime",
      },

      yaxis: {},

      // Remove legends
      legend: {
        show: true,
      },
      // Set line color
      colors: ["#21C55D"], // Use any hex color code
      // Disable tooltips (value indicators)
      tooltip: {
        enabled: true,
      },
      // Disable data labels on the chart
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: ylabel ?? "",
        data: yaxis ?? [],
      },
    ],
  };

  return (
    <div>
      <Chart
        type={chartType || "line"}
        height={380}
        options={config.options}
        series={config.series}
      />
    </div>
  );
};

export default TimeseriesChart;
