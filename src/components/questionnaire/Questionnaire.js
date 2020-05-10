import React, { Component } from 'react';

import Q1 from './Q1';
import Q2 from './Q2';

class Questionnaire extends Component{
    state = {
        step: 1
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        });
    }

    render(){
        switch(this.state.step){
            case 1:
                return(
                    <Q1
                        nextStep={this.nextStep}/>
                );
            case 2:
                return(
                    <Q2
                        nextStep={this.nextStep}/>
                )
        }
    }
}

export default Questionnaire;