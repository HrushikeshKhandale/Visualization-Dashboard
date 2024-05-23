import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
    const barChartData = {
        labels: data.years,
        datasets: [
            {
                label: 'Intensity by Year',
                data: data.intensities,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
            <h3>Intensity by Year</h3>
            <Bar data={barChartData} options={options} />
        </div>
    );
};

export default BarChart;








