import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
	constructor(porps){
		super(porps);
		this.state = {date: new Date()};
	}
	componentDidMount() {
		this.timerID = setInterval(()=>this.tick(),1000)
  }
  componentWillUnmount() {
		console.log(1);
  	clearInterval(this.timerID);
  }

  tick(){
  	this.setState({
  		date:new Date()
  	})
  }
	render(){
		return (
				<div>
			        <h1>Hello, world!</h1>
			        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			      </div>
			)
	}
}

// this.state.date.tolocaleTimeString()
// this.state.date.toLocaleTimeString()

export default Clock;