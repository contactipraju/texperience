import './SkillsPage.scss';

import SkillsContextProvider from './SkillsContext';
import SkillsChart from './components/SkillsChart/SkillsChart';

const SkillsPage = () => {
	return (
		<div id="skills-page">
			<SkillsContextProvider>
				<div className="content">
					<SkillsChart />
				</div>
			</SkillsContextProvider>
		</div>
	)
}

export default SkillsPage;
