import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1 className="mt-4">Data Visualization Dashboard</h1>
                <Dashboard />
            </div>
        </div>
    );
}

export default App;

