import React from 'react';

import { res2 } from '../Data';

const Result2 = ({ nextStep }) => {

    return(
        <div>
            <h1>{res2}</h1>
            
            <button onClick={() => nextStep(0)}>Return</button>
        </div>
    );
}

export default Result2;