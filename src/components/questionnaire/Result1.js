import React from 'react';

import { res1 } from '../Data';

const Result1 = ({ nextStep }) => {

    return(
        <div>
            <h1>{res1}</h1>
            
            <button onClick={() => nextStep(1)}>Return</button>
        </div>
    );
}

export default Result1;