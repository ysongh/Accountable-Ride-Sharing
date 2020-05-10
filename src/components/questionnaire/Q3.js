import React, {useState} from 'react';

import { quest3, list3 } from '../Data';

const Q2 = ({ nextStep }) => {
    const [choice, setChoice] = useState(1);
    return(
        <div>
            <h1>{quest3}</h1>

            <ul>
                {list3.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
            
            <input type="radio" name="yes" value="4" onClick={() => setChoice(5)}/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="no" value="4" onClick={() => setChoice(4)}/>
            <label htmlFor="no">No</label>

            <button onClick={() => nextStep(choice)}>Next</button>
        </div>
    );
}

export default Q2;