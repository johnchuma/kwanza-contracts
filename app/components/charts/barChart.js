"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const BarChart = ({ title, categories, data1, label1, inputType }) => {
  const config = {
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: false, // Ensure bars are grouped, not stacked
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false, // Horizontal bars
          barHeight: "50%", // Adjust the height of bars
        },
      },
      xaxis: {
        categories: categories ?? [], // Categories for each bar group
      },
      legend: {
        show: true,
        position: "bottom", // Adjust legend position
      },
      colors: ["#21C55D", "#3B82F6"], // Colors for each group of bars
      dataLabels: {
        enabled: false, // Disable labels on bars
      },
      title: {
        text: title ?? "", // Title of the chart
        align: "center",
      },
      tooltip: {
        enabled: true, // Enable tooltips to display values
      },
    },
    series: [
      {
        name: label1 ?? "Series 1",
        data: data1 ?? [],
      },
    ],
  };

  return (
    <div>
      <Chart
        type={inputType || "bar"}
        options={config.options}
        series={config.series}
        height={250}
      />
    </div>
  );
};

export default BarChart;
