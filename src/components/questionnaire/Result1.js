import React from 'react';

import { res1 } from '../Data';

const Result1 = ({ nextStep }) => {

    return(
        <div className="container">
            <h1 className="title">{res1}</h1>
            
            <button className="btn" onClick={() => nextStep(0)}>Return</button>
        </div>
    );
}

export default Result1;