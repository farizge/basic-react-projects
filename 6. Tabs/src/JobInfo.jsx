import React from "react";
import Duties from "./Duties";

function JobInfo({ jobs, currentItem }) {
    const { title, dates, duties, company } = jobs[currentItem];
    return (
        <div className="job-info">
            <h3>{title}</h3>
            <span className="job-company">{company}</span>
            <p className="job-date">{dates}</p>
            <Duties duties={duties} />
        </div>
    );
}

export default JobInfo;
