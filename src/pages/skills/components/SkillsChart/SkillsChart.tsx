import './SkillsChart.scss';

import ReactApexChart from "react-apexcharts";

import { useContext } from 'react';
import { SkillsContext, ISkillsContext } from '../../SkillsContext';
import { ApexOptions } from 'apexcharts';

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

const SkillsChart = (props: any) => {
	const { isLoading, skills, setSkills } = useContext(SkillsContext) as ISkillsContext;

	const chartData = {
		series: [{
			name: 'Skill',
			data: skills
		}],
		options: options
	};

	return (
		<div id="chart">
			<h2 className="chart-title"> My most-recent Web/Mobile development experience </h2>
			{!isLoading && 
				<ReactApexChart options={chartData.options} series={chartData.series} type="rangeBar" height={450} />
			}
		</div>
	)
}

export default SkillsChart;
