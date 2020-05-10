import React, {useState} from 'react';

import { quest3, list3 } from '../Data';

const Q2 = ({ nextStep }) => {
    const [choice, setChoice] = useState(1);
    return(
        <div className="container">
            <h1 className="title">{quest3}</h1>

            <ul>
                {list3.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
            
            <input type="radio" name="que" value="4" onClick={() => setChoice(5)}/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="que" value="4" onClick={() => setChoice(4)}/>
            <label htmlFor="no">No</label>

            <button className="btn" onClick={() => nextStep(choice)}>Continue</button>
        </div>
    );
}

export default Q2;