import './ExperiencePage.scss';

// May be move this ContextProvider to a level up (from skills folder)
import SkillsContextProvider from '../skills/SkillsContext';

import Companies from './components/Companies/Companies';

const ExperiencePage = () => {
	return (
		<div id='experience-page'>
			<SkillsContextProvider>
				<div className='experience-page-heading'>
					Some of the Projects/Features I contributed to in my past roles:
				</div>

				<div className='content'>
					<Companies />
				</div>
			</SkillsContextProvider>
		</div>
	)
}

export default ExperiencePage;
