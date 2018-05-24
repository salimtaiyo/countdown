import React, { Component } from 'react';


class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            days: 0,
            hrs:0,
            min:0,
            sec: 0,
        
        }
    }

    componentWillMount(){
        this.getTime(this.props.deadline);
    }

    componentDidMount(){
       setInterval(() => this.getTime(this.props.deadline),1000);
    }

    

    getTime(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const sec = Math.floor((time/1000)%60);
        const min = Math.floor((time/1000/60) % 60);
        const hrs = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));
        
        this.setState({
            days, hrs, min ,sec
        })
    }

    addingZero(x){
       return  x < 10 ? '0' + x: x;
    }
    render(){
        
        return(
            <div>
                <div className="app__c">{this.addingZero(this.state.days)}</div>
                <div className="app__c"> {this.addingZero(this.state.hrs)}</div>
                <div className="app__c"> {this.addingZero(this.state.min)}</div>
                <div className="app__c"> {this.addingZero(this.state.sec)}</div>
            </div>
        )
    }
}

export default Clock;