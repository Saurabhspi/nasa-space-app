import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const NEOBarChart = ({ neoData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = chartRef.current;
            const ctx = chartInstance.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 400, 0);
            gradient.addColorStop(0, "#36D1DC");
            gradient.addColorStop(1, "#5B86E5");

            if (chartInstance.data.datasets.length > 0) {
                chartInstance.data.datasets[0].backgroundColor = gradient;
                chartInstance.update();
            }
        }
    }, [neoData]);

    if (!neoData || neoData.length === 0) {
        return <p>No data available for visualization.</p>;
    }

    const labels = neoData.map((obj) => obj.name);
    const diameters = neoData.map(
        (obj) => obj.estimated_diameter.kilometers.estimated_diameter_max
    );

    const data = {
        labels: labels,
        datasets: [
            {
                label: "NEO Max Diameter (km)",
                data: diameters,
                backgroundColor: "rgba(54, 209, 220, 0.8)",
                borderColor: "rgba(54, 209, 220, 1)",
                borderWidth: 2,
                borderRadius: 8,
                hoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
                barThickness: 25,
            },
        ],
    };

    const options = {
        indexAxis: "y", 
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) =>
                        `Diameter: ${tooltipItem.raw.toFixed(2)} km`,
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Diameter (km)",
                    color: "#ffffff",
                    font: { size: 16, weight: "bold" },
                },
                ticks: { color: "#ffffff" },
                grid: { color: "rgba(255, 255, 255, 0.1)" },
            },
            y: {
                ticks: { color: "#ffffff", font: { weight: "bold" } },
                grid: { display: false },
            },
        },
    };

    return (
        <div style={{ width: "90%", margin: "20px auto", background: "#222", padding: "20px", borderRadius: "10px" }}>
            <h3 style={{ textAlign: "center", color: "#fff", fontSize: "20px" }}>Near-Earth Object Diameters</h3>
            <Bar ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default NEOBarChart;
