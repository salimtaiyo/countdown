import React, { Component } from 'react';


class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            days: 0,
            hours:0,
            minute:0,
            sec: 0
        }
    }

    render(){
        return(
            <div>
                {this.props.deadline}
                <div className="app__c">{this.state.days}</div>
                <div className="app__c"> {this.state.hours}</div>
                <div className="app__c"> {this.state.minute}</div>
                <div className="app__c"> {this.state.sec}</div>
            </div>
        )
    }
}

export default Clock;