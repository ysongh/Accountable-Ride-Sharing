import React from 'react';

import { res2 } from '../Data';

const Result2 = ({ nextStep }) => {

    return(
        <div className="container">
            <h1 className="title">{res2}</h1>
            
            <button className="btn" onClick={() => nextStep(0)}>Return</button>
        </div>
    );
}

export default Result2;