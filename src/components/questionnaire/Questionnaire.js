import React, { Component } from 'react';

import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Result1 from './Result1';
import Result2 from './Result2';

class Questionnaire extends Component{
    state = {
        step: 1
    }

    nextStep = (num) => {
        this.setState({
            step: num
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
                );
            case 3:
                return(
                    <Q3
                        nextStep={this.nextStep}/>
                );
            case 4:
                return(
                    <Result1
                        nextStep={this.nextStep}/>
                );
            case 5:
                return(
                    <Result2
                        nextStep={this.nextStep}/>
                );
        }
    }
}

export default Questionnaire;