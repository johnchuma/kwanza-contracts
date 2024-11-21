"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const MixedChart = ({
  title,
  categories,
  data1,
  data2,
  label1,
  label2,
  inputType,
}) => {
  const config = {
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: false, // Ensure bars are not stacked
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: "50%",
        },
      },
      xaxis: {
        categories: categories ?? [], // Categories for the x-axis
      },
      legend: {
        show: true,
        position: "bottom",
      },
      colors: ["#21C55D", "#F97316", "#3B82F6"], // Colors for each series
      dataLabels: {
        enabled: false,
      },
      title: {
        text: title ?? "",
        align: "center",
      },
      tooltip: {
        enabled: true,
        shared: true, // Show values of both series in tooltip
      },
      yaxis: [
        {
          title: {
            text: label1 ?? "Primary Y-Axis",
          },
        },
        {
          opposite: true,
          title: {
            text: label2 ?? "Secondary Y-Axis",
          },
        },
      ],
    },
    series: [
      {
        name: label1 ?? "Series 1",
        data: data1 ?? [],
        type: "bar", // Bar series
      },
      {
        name: label2 ?? "Series 2",
        data: data2 ?? [],
        type: "bar", // Line series
      },
    ],
  };

  return (
    <div>
      <Chart
        type={inputType || "line"}
        options={config.options}
        series={config.series}
        height={350}
      />
    </div>
  );
};

export default MixedChart;
