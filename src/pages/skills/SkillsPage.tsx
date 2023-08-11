import './SkillsPage.scss';

import SkillsContextProvider from './SkillsContext';
import SkillsChart from './components/SkillsChart/SkillsChart';
import PageTitle from '../../core/components/PageTitle/PageTitle';

// TODO: let user add/edit/delete Companies/Skills information, via a modal dialog
// import CompaniesForm from './components/CompaniesForm/CompaniesForm';
// TODO: while entering skill against a company, restrict the date-picker range to that of the company tenure
// import SkillsForm from './components/SkillsForm/SkillsForm';

const SkillsPage = () => {
	return (
		<div id="skills-page">
			<PageTitle title="Primary Technologies I used in past roles. The chart is best viewed on larger screens" />

			<SkillsContextProvider>
				<div className="content">
					<SkillsChart />
					{/* <CompaniesForm /> */}
					{/* <SkillsForm /> */}
				</div>
			</SkillsContextProvider>
		</div>
	)
}

export default SkillsPage;
