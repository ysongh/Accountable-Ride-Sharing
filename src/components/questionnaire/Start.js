import React from 'react';

import { start1, start1Infor } from '../Data';

const Result1 = ({ nextStep }) => {

    return(
        <div className="container">
            <h1 className="title">{start1}</h1>
            <p>{start1Infor}</p>
            
            <button className="btn" onClick={() => nextStep(1)}>Start</button>
        </div>
    );
}

export default Result1;