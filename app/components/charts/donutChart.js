"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const DonutChart = ({ title, labels, data }) => {
  const total = data ? data.reduce((a, b) => a + b, 0) : 0; // Calculate total sum of data

  const config = {
    options: {
      chart: {
        type: "donut",
        height: 250,
      },
      labels: labels ?? [],
      legend: {
        show: true,
        position: "bottom",
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
      },
      title: {
        text: title ?? "",
        align: "center",
      },
      colors: ["#21C55D", "#F97316", "#3B82F6", "#EF4444", "#14B8A6"],
      plotOptions: {
        pie: {
          donut: {
            size: "60%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
                formatter: () => total, // Display total sum in the center
              },
            },
          },
        },
      },
    },
    series: data ?? [],
  };

  return (
    <div>
      <Chart
        type="donut"
        options={config.options}
        series={config.series}
        height={300}
      />
    </div>
  );
};

export default DonutChart;
