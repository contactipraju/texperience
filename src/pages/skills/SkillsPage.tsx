import './SkillsPage.scss';

import SkillsContextProvider from './SkillsContext';
import SkillsChart from './components/SkillsChart/SkillsChart';

// TODO: let user add/edit/delete Companies/Skills information, via a modal dialog
// import CompaniesForm from './components/CompaniesForm/CompaniesForm';
// TODO: while entering skill against a company, restrict the date-picker range to that of the company tenure
// import SkillsForm from './components/SkillsForm/SkillsForm';

const SkillsPage = () => {
	return (
		<div id="skills-page">
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
