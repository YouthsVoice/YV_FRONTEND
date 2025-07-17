"use client";

import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Head from "next/head";

export default function TOTWORKPAGE() {
  return (
    <>
      <Head>
        <title>MHM ToT Social Business Plan | Youth Worldwide Foundation</title>
      </Head>

      <div className="bg-[#FDFBF8] text-gray-800 min-h-screen">
        <div className="container mx-auto p-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-900">
              Period-Positive Pathways
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              A Sustainable Social Business for MHM Empowerment by Youth Worldwide Foundation
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center text-orange-800 mb-4">
              MHM Practices at a Glance
            </h2>
            <div className="chart-container mx-auto max-w-md">
              <MHMStatsChart />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center text-orange-800 mb-4">
              Projected Growth Chart
            </h2>
            <GrowthChart />
          </section>
        </div>
      </div>
    </>
  );
}

function MHMStatsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Use Modern Methods", "Traditional Methods", "Miss School"],
          datasets: [
            {
              data: [24.3, 75.7, 35.1],
              backgroundColor: ["#16a34a", "#f97316", "#dc2626"],
              borderColor: "#FDFBF8",
              borderWidth: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    }

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
}

function GrowthChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [currentView, setCurrentView] = useState<"revenue" | "impact">("revenue");

  const revenueData = {
    labels: ["Year 1", "Year 2", "Year 3"],
    datasets: [
      {
        label: "Projected Revenue (USD)",
        data: [5000, 30000, 75000],
        backgroundColor: "#16a34a",
      },
    ],
  };

  const impactData = {
    labels: ["Year 1", "Year 2", "Year 3"],
    datasets: [
      {
        label: "Certified Trainers",
        data: [50, 250, 650],
        backgroundColor: "#ea580c",
      },
      {
        label: "Beneficiaries Reached",
        data: [2500, 15000, 50000],
        backgroundColor: "#0284c7",
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "bar",
        data: revenueData,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) =>
                  currentView === "revenue"
                    ? `$${Number(value).toLocaleString()}`
                    : Number(value).toLocaleString(),
              },
            },
          },
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    }

    return () => {
      chartInstanceRef.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleView = () => {
    if (!chartInstanceRef.current) return;
    chartInstanceRef.current.data = currentView === "revenue" ? impactData : revenueData;
    chartInstanceRef.current.options.scales!.y!.ticks!.callback = (value) =>
      currentView === "revenue"
        ? Number(value).toLocaleString()
        : `$${Number(value).toLocaleString()}`;
    chartInstanceRef.current.update();
    setCurrentView((prev) => (prev === "revenue" ? "impact" : "revenue"));
  };

  return (
    <>
      <div className="text-center mb-4">
        <button onClick={toggleView} className="bg-gray-200 py-1 px-3 rounded-md text-sm">
          Switch to {currentView === "revenue" ? "Impact" : "Revenue"} View
        </button>
      </div>
      <div className="chart-container mx-auto max-w-2xl">
        <canvas ref={chartRef} />
      </div>
    </>
  );
}
