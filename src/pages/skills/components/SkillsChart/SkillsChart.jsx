import React from "react";
import ReactApexChart from "react-apexcharts";

import './SkillsChart.scss';

const data = [
	{
		x: 'React', fillColor: '#008FFB',
		y: [new Date('2023-02-05').getTime(), new Date('2023-07-15').getTime()]
	},
	{
		x: 'Angular', fillColor: '#FF4560',
		y: [new Date('2019-11-18').getTime(), new Date('2023-01-11').getTime()]
	},
	{
		x: 'NodeJS', fillColor: '#6cc24a',
		y: [new Date('2023-02-02').getTime(), new Date('2023-07-15').getTime()]
	},
	{
		x: 'React', fillColor: '#008FFB',
		y: [new Date('2018-11-20').getTime(), new Date('2019-11-15').getTime()]
	},
	{
		x: 'NodeJS', fillColor: '#6cc24a',
		y: [new Date('2018-05-01').getTime(), new Date('2018-11-15').getTime()]
	},
	{
		x: 'VueJS', fillColor: '#42b883',
		y: [new Date('2018-05-01').getTime(), new Date('2018-11-15').getTime()]
	},
	{
		x: 'Angular', fillColor: '#FF4560',
		y: [new Date('2017-10-01').getTime(), new Date('2018-04-30').getTime()]
	},
	{
		x: 'AngularJS', fillColor: '#FFCCCB',
		y: [new Date('2015-06-20').getTime(), new Date('2017-11-30').getTime()]
	},
	{
		x: 'Typescript', fillColor: '#007acc',
		y: [new Date('2015-06-20').getTime(), new Date('2023-07-15').getTime()]
	},
	{
		x: 'jQuery', fillColor: '#8824D0',
		y: [new Date('2009-09-01').getTime(), new Date('2015-03-04').getTime()]
	},
	{
		x: 'Javascript', fillColor: '#77D055',
		y: [new Date('2009-06-01').getTime(), new Date('2023-07-15').getTime()]
	},
	{
		x: 'CSS', fillColor: '#66DDD0',
		y: [new Date('2009-06-01').getTime(), new Date('2023-07-15').getTime()]
	},
	{
		x: 'HTML', fillColor: '#555DD0',
		y: [new Date('2009-06-01').getTime(), new Date('2023-07-15').getTime()]
	}
];

const annotationsData = {
	xaxis: [
		{
			x: new Date('18 Feb 2023').getTime(),
			x2: new Date('15 Jul 2023').getTime(),
			borderColor: '#B3F7CA',
			fillColor: '#B3F7CA',
			label: {
				style: {
					color: '#c4c4c4',
				},
				text: 'Vision21'
			}
		},
		{
			x: new Date('18 Nov 2019').getTime(),
			x2: new Date('20 Jan 2023').getTime(),
			borderColor: '#775DD0',
			fillColor: '#B3F7CA',
			label: {
				style: {
					color: '#c4c4c4',
				},
				text: 'Specialized'
			}
		},
		{
			x: new Date('26 Nov 2018').getTime(),
			x2: new Date('14 Nov 2019').getTime(),
			borderColor: '#775DD0',
			fillColor: '#e33d96',
			label: {
				style: {
					color: '#c4c4c4',
				},
				text: 'Ahoy Club'
			}
		},
		{
			x: new Date('01 May 2018').getTime(),
			x2: new Date('31 Oct 2018').getTime(),
			borderColor: '#775DD0',
			fillColor: '#ff0404',
			label: {
				style: {
					color: '#c4c4c4',
				},
				text: 'Morningstar'
			}
		},
		{
			x: new Date('23 July 2016').getTime(),
			x2: new Date('30 Apr 2018').getTime(),
			borderColor: '#775DD0',
			fillColor: '#B3F7CA',
			label: {
				style: {
					color: '#c4c4c4',
				},
				text: 'Todays Plan'
			}
		},
		{
			x: new Date('20 June 2015').getTime(),
			x2: new Date('30 June 2016').getTime(),
			borderColor: '#775DD0',
			label: {
				style: {
					color: '#c4c4c4',
				},
				text: 'IRI Australia'
			}
		},
		{
			x: new Date('04 Mar 2015').getTime(),
			x2: new Date('22 Aug 2012').getTime(),
			borderColor: '#775DD0',
			fillColor: '#B3F7CA',
			label: {
				style: {
					color: '#c4c4c4',
				},
				text: 'eureQa (Tripod)'
			}
		},
		{
			x: new Date('31 Jul 2012').getTime(),
			x2: new Date('01 Jun 2009').getTime(),
			borderColor: '#775DD0',
			label: {
				style: {
					color: '#c4c4c4',
				},
				text: 'Divami'
			}
		}
	]
};

class SkillsChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: 'Skill',
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
				annotations: annotationsData,
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
				<h2 className="chart-title"> My most-recent experience in Web/Mobile development </h2>
				<ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={450} />
			</div>
		);
	}
}

export default SkillsChart;
