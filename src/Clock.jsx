import React, { Component } from 'react';


class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            days: 0,
            hrs:0,
            min:0,
            sec: 0,
            days:0
        }
    }

    getTime(deadline){
        const time = Date.parse(deadline)- Date.parse(new Date());
        const sec = Math.floor((time/1000)%60);
        const min = Math.floor((time/1000/60) % 60);
        const hrs = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));
        
        console.log(`days: ${days} hours ${hrs} mins ${min} sec ${sec}`);
    }

    render(){
            this.getTime(this.props.deadline);
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