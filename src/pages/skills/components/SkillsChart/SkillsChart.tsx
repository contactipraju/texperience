import './SkillsChart.scss';

import { ApexOptions } from 'apexcharts';
import ReactApexChart from "react-apexcharts";

import { useContext } from 'react';
import { SkillsContext, ISkillsContext } from '../../SkillsContext';

const options: ApexOptions = {
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
	yaxis: [
		{ opposite: true }
	],
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
};

const SkillsChart = () => {
	const { isLoading, skills, tenure } = useContext(SkillsContext) as ISkillsContext;

	options['annotations'] = {
		xaxis: tenure
	};

	const chartData = {
		series: [{
			name: 'Skill',
			data: skills
		}],
		options: options
	};

	return (
		<div id="chart">
			{/* <div className="chart-title"> Companies I worked at in the last 14 years and the Main Technologies (Web/Mobile development) I used</div> */}
			{!isLoading && 
				<ReactApexChart options={chartData.options} series={chartData.series} type="rangeBar" height={500} />
			}
		</div>
	)
}

export default SkillsChart;
