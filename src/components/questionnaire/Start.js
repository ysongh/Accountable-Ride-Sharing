import React from 'react';

import { start1, start1Infor } from '../Data';

const Result1 = ({ nextStep }) => {

    return(
        <div>
            <h1>{start1}</h1>
            <p>{start1Infor}</p>
            
            <button onClick={() => nextStep(1)}>Return</button>
        </div>
    );
}

export default Result1;