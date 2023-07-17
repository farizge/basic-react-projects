import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { v4 as uuid } from "uuid";

function Duties({ duties }) {
    return (
        <>
            {duties.map((duty) => {
                let id = uuid();
                return (
                    <div key={id} className="job-desc">
                        <BiChevronsRight className="job-icon"></BiChevronsRight>
                        <p>{duty}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Duties;
