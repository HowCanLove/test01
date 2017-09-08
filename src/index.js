import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logo from './logo.svg';

import Welcome from './test';
// import Clock from './React.Component';

// `
// <div className="App">
// <div className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h2>Welcome to React</h2>
// </div>
// <p className="App-intro">
// To get started, edit <code>src/App.js</code> and save to reload.
// </p>
// </div>
// `
function welcome(props){
	return <h1>Hello, {props.name}</h1>;
}

function Ap(){
	return (
			<div>
				<Welcome name="Sara1" />
				<Welcome name="Sara2" />
				<Welcome name="Sara3" />
			</div>)
}
const element = <Welcome name="Sara" />;

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props){
	return (
			<div className="Comment">
				<div className="UserInfo">
					<img className="Acatar" src={props.author.avatarUrl} 
					alt={props.author.name} />
					<div>
						{props.author.name}
					</div>
				</div>
				<div>
					{props.text}
				</div>
				<div>
					{formatDate(props.date)}
				</div>
				<div>
					{props.number}
				</div>
			</div>
		)
}

function add(a,b){
	return a + b;
}
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};


class Clock extends React.Component{
	constructor(porps){
		super(porps);
		this.state = {date: new Date()};
	}
	componentDidMount() {
		this.timerID = setInterval(()=>this.tick(),1000)
  }
  componentWillUnmount() {
  	clearInterval(this.timerID);
  }

  tick(){
  	this.setState({
  		date:new Date()
  	})
  }

  getType(name){
  	if(name == 1){
  		return this.state.date.getHours() < 10 ? "0"+this.state.date.getHours(): this.state.date.getHours()
  	}else if(name == 2){
  		return this.state.date.getMinutes() < 10 ? "0"+this.state.date.getMinutes(): this.state.date.getMinutes()
  	}else if(name == 3){
  		return this.state.date.getSeconds() < 10 ? "0"+this.state.date.getSeconds(): this.state.date.getSeconds()
  	}else{
  		return "名字为空"
  	}
  }
	render(){
		return (
				<div>
			        <h1>Hello, world! {this.props.name}</h1>
			        <h2>It is {this.getType(this.props.name)}.</h2>
			      </div>
			)
	}
}

class Demo1 extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			posts: [],
			comments: []
		}
	}
	fetchPosts(){

	}
	fetchComments(){
		
	}
	componentDidMount(){
		this.fetchPosts().then(response => {
			this.setState({
				posts: response.posts
			})
		})

		this.fetchComments().then(response => {
			this.setState({
				comments: response.comments
			})
		})
	}
}

function GetClock(){
	function con(){
		console.log(123456)
	}
	return (
		<div>
			<Clock name="1" />
			<Clock name="2" />
			<Clock name="3" />
			<Clock />
			<a href="#" onClick={con}>
			  Click me
			</a>
		</div>
		)
}

class Demo2 extends React.Component {
	
	constructor(props) {
		super(props);
    	this.state = {isToggleOn: true};
		this.ButtonClick = this.ButtonClick.bind(this);
	}

	ButtonClick(){
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}))
	}

	handleClick = () => {
		// console.log(this);
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}))
		// var isToggleOn = !this.setState.isToggleOn;
		// this.setState({
		// 	isToggleOn: !isToggleOn
		// })
	}
	handleClick2(e){
		console.log(this);
	}
	render(){
		return (
			<div>
				<button onClick={this.ButtonClick}> {this.state.isToggleOn ? "ON" : "OFF"}</button>
				<button onClick={this.handleClick}>click me</button>
				<button onClick={(e)=>this.handleClick2(e)}>click me</button>
			</div>
			)
	}
}

function UserGreeting(props){
	return <h1>Welcome back!</h1>
}

function GuestGreeting(props){
	return <h1>Please sign up.</h1>
}

function Greeting(props){
	const isLoginedIn = props.isLoginedIn;

	if(isLoginedIn){
		return <UserGreeting />
	}
	return <GuestGreeting />
}
class Demo3 extends React.Component {
	
	constructor(props) {
		super(props)
	}


}
ReactDOM.render(
	<Greeting isLoginedIn={false} />,
	document.getElementById('root')
	)
// function Clock2(props){
// 	return (
// 		<div>
// 			<h1>hello world</h1>
// 			<h2>It is {props.data.toLocaleTimeString()}</h2>
// 		</div>
// 		)
// }
// count element = (<div>hello world</div>)
// ReactDOM.render(<Comment 
// 	author = {comment.author}
// 	text = {comment.text}
// 	date = {comment.date}

// 	number = {add(1,4)}
// 	// props = {comment}
// 	 />, document.getElementById('root'));

// count element = (<div>hello world</div>)
// function tick(){
// 	ReactDOM.render(<Clock2 data={new Date()} />, document.getElementById('root'));
// }
// tick();
// setInterval(tick, 500)
// registerServiceWorker();
