import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyChart= ({ data }) => {
    return (
        <div className="chart-container mb-4">
            <h3>Likelihood and Relevance by Year (Plotly)</h3>
            <Plot
                data={[
                    {
                        x: data.years,
                        y: data.likelihoods,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'blue' },
                        name: 'Likelihood',
                    },
                    {
                        x: data.years,
                        y: data.relevance,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                        name: 'Relevance',
                    },
                ]}
                layout={{ width: '100%', height: 400, title: 'Likelihood and Relevance by Year' }}
            />
        </div>
    );
};

export default PlotlyChart;