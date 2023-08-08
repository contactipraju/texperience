import './Roles.scss';

import { IProjectData } from '../../Projects.interfaces';

import { useContext } from 'react';
import { SkillsContext, ISkillsContext } from '../../../skills/SkillsContext';

import Project from '../Project/Project';

const Roles = () => {
	const { roles } = useContext(SkillsContext) as ISkillsContext;

	return (
		<div id='roles'>
			{roles && roles.length > 0 ? roles.map((role: any) => (
				<div className='role' key={role.company.toString()}>
					<div className='role-designation'>{role.designation}</div>
					<div className='role-company'>{role.company}</div>
					<div className='role-description'>{role.description}</div>
					<div className='role-period'>{role.period}</div>

					<div id='role-technologies'>
						{role.technologies && role.technologies.length > 0 ? role.tehnologies.map((technology: any) => (
							<div className='technology' key={technology.toString()}>{technology}</div>
						)) : '' }
					</div>

					<div id='role-projects'>
						{role.projects && role.projects.length > 0 ? role.projects.map((project: IProjectData) => (
							<Project project={project} key={project.id}/>
						)) : <div>{'No projects available'}</div> }
					</div>
				</div>
			)) : <div>{'No roles available'}</div> }
		</div>
	)
}

export default Roles;
