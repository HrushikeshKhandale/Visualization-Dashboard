import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    const lineChartData = {
        labels: data.years,
        datasets: [
            {
                label: 'Likelihood by Year',
                data: data.likelihoods,
                borderColor: 'rgba(54, 162, 235, 0.6)',
                fill: false,
            },
            {
                label: 'Relevance by Year',
                data: data.relevance,
                borderColor: 'rgba(255, 99, 132, 0.6)',
                fill: false,
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
            <h3>Likelihood and Relevance by Year</h3>
            <Line data={lineChartData} options={options} />
        </div>
    );
};

export default LineChart;








