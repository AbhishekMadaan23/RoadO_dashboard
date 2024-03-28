import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function OrdersChar(props) {
  const data = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [props.data.upcoming, props.data.outgoing, props.data.completed],
        backgroundColor: [
          "rgba(255, 255, 0, 0.2)",
          "rgba(0, 0, 255, 0.2)",
          "rgba(0, 255, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 255, 0, 1)",
          "rgba(0, 0, 255, 1)",
          "rgba(0, 255, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
