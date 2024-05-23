import React from 'react';

const Filters = ({ filters, handleFilterChange }) => {
    return (
        <div className="filters mb-4">
            <div className="row">
                <div className="col-md-3">
                    <label>End Year</label>
                    <input
                        type="text"
                        name="endYear"
                        value={filters.endYear}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <label>Topic</label>
                    <input
                        type="text"
                        name="topic"
                        value={filters.topic}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <label>Sector</label>
                    <input
                        type="text"
                        name="sector"
                        value={filters.sector}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <label>Region</label>
                    <input
                        type="text"
                        name="region"
                        value={filters.region}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <label>Pest</label>
                    <input
                        type="text"
                        name="pest"
                        value={filters.pest}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <label>Source</label>
                    <input
                        type="text"
                        name="source"
                        value={filters.source}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <label>SWOT</label>
                    <input
                        type="text"
                        name="swot"
                        value={filters.swot}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <label>Country</label>
                    <input
                        type="text"
                        name="country"
                        value={filters.country}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-3">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={filters.city}
                        onChange={handleFilterChange}
                        className="form-control"
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;


