import React from 'react';

const Q1 = ({nextStep}) => {
    return(
        <div>
            <h1>Question 1</h1>
            <button onClick={nextStep}>Next</button>
        </div>
    );
}

export default Q1;