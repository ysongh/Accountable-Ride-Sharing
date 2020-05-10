import React, {useState} from 'react';

import { quest1 } from '../Data';

const Q1 = ({ nextStep }) => {
    const [choice, setChoice] = useState(1);

    return(
        <div>
            <h1>{quest1}</h1>
            <input type="radio" name="yes" value="2" onClick={() => setChoice(2)}/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="no" value="3" onClick={() => setChoice(3)}/>
            <label htmlFor="no">No</label>
            <button onClick={() => nextStep(choice)}>Next</button>
        </div>
    );
}

export default Q1;