import React from "react";

function BtnContainer({ jobs, currentItem, setCurrentItem }) {
    return (
        <div className="btn-container">
            {jobs.map((job, index) => (
                <button
                    key={job.id}
                    className={
                        index === currentItem ? "job-btn active-btn" : "job-btn"
                    }
                    onClick={() => setCurrentItem(index)}
                >
                    {job.company}
                </button>
            ))}
        </div>
    );
}

export default BtnContainer;
