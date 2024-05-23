import React from 'react';
import { Chart } from 'react-google-charts';

const GoogleChart = ({ data }) => {
    const chartData = [
        ['Sector', 'Intensity'],
        ...data.sectors.map((sector, index) => [sector, data.sectorIntensities[index]]),
    ];

    return (
        <div className="chart-container mb-4">
            <h3>Sector Intensity (Google Charts)</h3>
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={chartData}
                options={{
                    title: 'Sector Intensity',
                    is3D: true,
                }}
            />
        </div>
    );
};

export default GoogleChart;
