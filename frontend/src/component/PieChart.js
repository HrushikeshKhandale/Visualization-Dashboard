import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    const pieChartData = {
        labels: data.sectors,
        datasets: [
            {
                label: 'Sector Intensity',
                data: data.sectorIntensities,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top',
                onClick: (e, legendItem) => {
                    // Handle click events on the legend
                }
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'y',
            intersect: false
        }
    };

    return (
        <div className="chart-container mb-4">
            <h3>Sector Intensity</h3>
            <Pie data={pieChartData} options={options} />
        </div>
    );
};

export default PieChart;




