import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Filters from "./Filters";
import PlotlyChart from "./PlotlyChart";
import GoogleChart from "./GoogleChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: "",
    topic: "",
    sector: "",
    region: "",
    pest: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = data.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true;
      const filterValue = filters[key].toLowerCase();
      const itemValue = item[key]?.toString().toLowerCase() || "";
      return itemValue.includes(filterValue);
    });
  });

  const processDataForCharts = () => {
    const years = [
      ...new Set(filteredData.map((item) => item.end_year || "Unknown")),
    ];
    const intensities = years.map((year) => {
      const yearData = filteredData.filter(
        (item) => (item.end_year || "Unknown") === year
      );
      return yearData.reduce((acc, item) => acc + item.intensity, 0);
    });

    const likelihoods = years.map((year) => {
      const yearData = filteredData.filter(
        (item) => (item.end_year || "Unknown") === year
      );
      return yearData.reduce((acc, item) => acc + item.likelihood, 0);
    });

    const relevance = years.map((year) => {
      const yearData = filteredData.filter(
        (item) => (item.end_year || "Unknown") === year
      );
      return yearData.reduce((acc, item) => acc + item.relevance, 0);
    });

    const sectors = [...new Set(filteredData.map((item) => item.sector))];
    const sectorIntensities = sectors.map((sector) => {
      const sectorData = filteredData.filter((item) => item.sector === sector);
      return sectorData.reduce((acc, item) => acc + item.intensity, 0);
    });

    return {
      years,
      intensities,
      likelihoods,
      relevance,
      sectors,
      sectorIntensities,
    };
  };

  const chartData = processDataForCharts();

  return (
    <div className="dashboard">
      <Filters filters={filters} handleFilterChange={handleFilterChange} />
      <div className="charts">
        <BarChart data={chartData} />
        <LineChart data={chartData} />
        <PieChart data={chartData} />
        <GoogleChart data={chartData} />
        <PlotlyChart data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
