import './ExperiencePage.scss';

// May be move this ContextProvider to a level up (from skills folder)
import SkillsContextProvider from '../skills/SkillsContext';

import PageTitle from '../../core/components/PageTitle/PageTitle';
// import Companies from './components/Companies/Companies';
import AllCompanies from './components/AllExperiences/AllCompanies';

const ExperiencePage = () => {
	return (
		<div id='experience-page'>
			<SkillsContextProvider>
				<PageTitle title="Feathers in my hat" />

				<div className='content'>
					{/* <Companies /> */}
					<AllCompanies />
				</div>
			</SkillsContextProvider>
		</div>
	)
}

export default ExperiencePage;
