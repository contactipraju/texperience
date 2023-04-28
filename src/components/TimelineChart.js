import React from "react";
import ReactApexChart from "react-apexcharts";

class TimelineChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: 'Bob',
				data: [{
					x: 'React',
					y: [new Date('2023-02-05').getTime(), new Date('2023-04-03').getTime()]
				},
				{
					x: 'Angular',
					y: [new Date('2019-11-18').getTime(), new Date('2023-01-20').getTime()]
				},
				{
					x: 'NodeJS',
					y: [new Date('2018-05-03').getTime(), new Date('2018-10-30').getTime()]
				},
				{
					x: 'VueJS',
					y: [new Date('2018-05-01').getTime(), new Date('2018-10-30').getTime()]
				},
				{
					x: 'Angular',
					y: [new Date('2017-10-01').getTime(), new Date('2018-04-30').getTime()]
				},
				{
					x: 'AngularJS',
					y: [new Date('2015-06-01').getTime(), new Date('2017-11-30').getTime()]
				},
				{
					x: 'Typescript',
					y: [new Date('2015-06-20').getTime(), new Date('2023-05-01').getTime()]
				}]
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
				<ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={450} />
			</div>
		);
	}
}

export default TimelineChart;
