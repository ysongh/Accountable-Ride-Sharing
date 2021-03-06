import React, {useState} from 'react';

import { quest1 } from '../Data';

const Q1 = ({ nextStep }) => {
    const [choice, setChoice] = useState(1);

    return(
        <div className="container">
            <h1 className="title">{quest1}</h1>
            <input type="radio" name="que" value="2" onClick={() => setChoice(2)}/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="que" value="3" onClick={() => setChoice(3)}/>
            <label htmlFor="no">No</label>
            <button className="btn" onClick={() => nextStep(choice)}>Continue</button>
        </div>
    );
}

export default Q1;