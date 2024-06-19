"use client";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ selectedInterval }) {
  const [dailyData, setDailyData] = useState({
    labels: [],
    datasets: [],
  });

  const [weeklyData, setWeeklyData] = useState({
    labels: [],
    datasets: [],
  });

  const [monthlyData, setMonthlyData] = useState({
    labels: [],
    datasets: [],
  });

  const [allData, setallData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (selectedInterval === "daily") {
      setDailyData({
        labels: ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"],
        datasets: [
          {
            label: "Tickets Resolved",
            data: [2, 4, 6, 3, 2, 4, 7],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(255, 165, 0, 0.4)",
          },
        ],
      });
    } else if (selectedInterval === "weekly") {
      setWeeklyData({
        labels: ["MON", "TUES", "WED", "THURS", "FRI", "SAT", "SUN"],
        datasets: [
          {
            label: "Tickets Resolved",
            data: [17, 18, 18, 15, 17, 23, 12],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(255, 165, 0, 0.4)",
          },
        ],
      });
    } else if (selectedInterval === "monthly") {
      setMonthlyData({
        labels: ["WEEK1", "WEEK2", "WEEK3", "WEEK4"],
        datasets: [
          {
            label: "Tickets Resolved",
            data: [60, 70, 40, 50, 70, 33, 26],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(255, 165, 0, 0.4)",
          },
        ],
      });
    } else if (selectedInterval === "yearly") {
      setMonthlyData({
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            label: "Tickets Resolved",
            data: [300, 400, 480, 550, 670, 733, 626, 300, 500, 900, 200, 400],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(255, 165, 0, 0.4)",
          },
        ],
      });
    } else if (selectedInterval === "all") {
      setallData({
        labels: ["Solved Tickets", "Rejected Tickets", "Pending Tickets"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      });
    }

    // eslint-disable-next-line
    const chartOptions = {
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text:
            selectedInterval === "daily"
              ? "Daily Revenue"
              : selectedInterval === "weekly"
              ? "Weekly Revenue"
              : "Monthly Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    };
  }, [selectedInterval]);

  return (
    <div className="mt-12 relative h-[-webkit-fill-available] border-2 m-auto p-4 rounded-lg bg-white">
      {selectedInterval === "all" ? (
        <Pie data={allData} />
      ) : (
        <Bar
          data={
            selectedInterval === "daily"
              ? dailyData
              : selectedInterval === "weekly"
              ? weeklyData
              : monthlyData
          }
        />
      )}
    </div>
  );
}
