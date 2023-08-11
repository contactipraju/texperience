import './ExperiencePage.scss';

// May be move this ContextProvider to a level up (from skills folder)
import SkillsContextProvider from '../skills/SkillsContext';

import Companies from './components/Companies/Companies';
import PageTitle from '../../core/components/PageTitle/PageTitle';

const ExperiencePage = () => {
	return (
		<div id='experience-page'>
			<SkillsContextProvider>
				<PageTitle title="My notable Projects/Features in the past roles" />

				<div className='content'>
					<Companies />
				</div>
			</SkillsContextProvider>
		</div>
	)
}

export default ExperiencePage;
