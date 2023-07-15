import React from "react";
import ReactApexChart from "react-apexcharts";
import './TimelineChart.css';

const data = [
	{
		x: 'React', fillColor: '#008FFB',
		y: [new Date('2023-02-05').getTime(), new Date('2023-04-03').getTime()]
	},
	{
		x: 'Angular', fillColor: '#FF4560',
		y: [new Date('2019-11-18').getTime(), new Date('2023-04-30').getTime()]
	},
	{
		x: 'NodeJS', fillColor: '#6cc24a',
		y: [new Date('2018-05-03').getTime(), new Date('2019-05-30').getTime()]
	},
	{
		x: 'React', fillColor: '#008FFB',
		y: [new Date('2018-11-20').getTime(), new Date('2019-11-14').getTime()]
	},
	{
		x: 'VueJS', fillColor: '#42b883',
		y: [new Date('2018-05-01').getTime(), new Date('2018-10-30').getTime()]
	},
	{
		x: 'Angular', fillColor: '#FF4560',
		y: [new Date('2017-10-01').getTime(), new Date('2018-04-30').getTime()]
	},
	{
		x: 'AngularJS', fillColor: '#FFCCCB',
		y: [new Date('2015-06-01').getTime(), new Date('2017-11-30').getTime()]
	},
	{
		x: 'Typescript', fillColor: '#007acc',
		y: [new Date('2015-06-20').getTime(), new Date('2023-05-01').getTime()]
	}
];

class TimelineChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: 'Bob',
				data: data
			}],
			options: {
				chart: {
					height: 450,
					type: 'rangeBar'
				},
				plotOptions: {
					bar: {
						horizontal: true,
						barHeight: '80%'
					}
				},
				xaxis: {
					type: 'datetime'
				},
				stroke: {
					width: 1
				},
				fill: {
					type: 'solid',
					opacity: 0.6
				},
				legend: {
					position: 'top',
					horizontalAlign: 'left'
				}
			}
		};
	}

	render() {
		return (
			<div id="chart">
				<h2 className="chart-title"> My Technical Experience over time </h2>
				<ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={450} />
			</div>
		);
	}
}

export default TimelineChart;
