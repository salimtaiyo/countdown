import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
    constructor(){
        super()

        this.state = {
            deadline : 'December 25 2018',
            newDeadline:''
        }
    }

    changeHandler(){
        this.setState ( {
            deadline: this.state.newDeadline
        })
    }

    newDiv(event) {
        this.setState({
            newDeadline: event.target.value
        })
    }

    render() {
        return (
            <div className="app">
                <h1> {this.state.deadline}</h1>
                <Clock deadline={this.state.deadline}/>
                <div> 
                    <input onChange={(event) => this.newDiv(event) } placeholder="input"/>
                    <button onClick={() => this.changeHandler()} type="submit"> submit</button>
                </div>
            </div>
        )
        
        
       
    }
}

export default App;