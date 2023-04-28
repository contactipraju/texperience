import logo from './logo.svg';
import './App.css';

import React from "react";
import TimelineChart from "./components/TimelineChart";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return (
			<div className="app">
				<div className="row">
					<div className="mixed-chart">
						<TimelineChart />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
