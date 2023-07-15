import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {favoritecolor: "red"};
	}
	static getDerivedStateFromProps(props, state) {
		return {favoritecolor: props.favcol };
	}
	shouldComponentUpdate() {
		return true;
	}
	changeColor = () => {
		this.setState({favoritecolor: "blue"});
	}
	render() {
		return (
			<div>
			<h1>My Favorite Color is {this.state.favoritecolor}</h1>
			<button type="button" onClick={this.changeColor}>Change color</button>
			</div>
		);
	}
}

ReactDOM.render(<Header />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
