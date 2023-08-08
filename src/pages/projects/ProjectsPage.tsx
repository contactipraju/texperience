import './ProjectsPage.scss';

// May be move this ContextProvider to a level up (from skills folder)
import SkillsContextProvider from './../skills/SkillsContext';
import Roles from './components/Roles/Roles';

const ProjectsPage = () => {
	return (
		<div id='projects-page'>
			<SkillsContextProvider>
				<div className='projects-page-heading'>
					Some of the projects I contributed to in my past roles:
				</div>

				<div className='content'>
					<Roles />
				</div>
			</SkillsContextProvider>
		</div>
	)
}

export default ProjectsPage;
