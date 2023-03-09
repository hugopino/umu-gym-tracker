import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Usuarios Gymnasio Universitario",
    },
  },
  scales: {
    y: {
      max: 75,
    },
  },
};

function getIntervalos(start, end, interval) {
  const results = [];
  let time = convertToDecimalTime(start);

  while (time <= convertToDecimalTime(end)) {
    const formattedTime = convertToHHMM(time);
    results.push(formattedTime);
    time += interval / 60;
  }

  return results;
}

function convertToDecimalTime(timeString) {
  const [hours, minutes] = timeString.split(":").map(parseFloat);
  return hours + minutes / 60;
}

function convertToHHMM(decimalTime) {
  const hours = Math.floor(decimalTime);
  const minutes = Math.round((decimalTime - hours) * 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}
const labels = getIntervalos("8:00", "22:30", 60);
export const data = {
  labels,
  datasets: [
    {
      label: "Usuarios",
      data: [2, 4, 5, 5, 6, 7, 10, 15, 30],
      backgroundColor: "rgba(254, 99, 132, 0.5)",
    },
  ],
};

export function VerticalBar() {
  return <Bar options={options} data={data} />;
}
