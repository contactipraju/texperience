import './AllCompanies.scss';

import { useContext } from 'react';

import { SkillsContext, ISkillsContext } from '../../../skills/SkillsContext';

import { IRoleData } from '../../Experience.interfaces';
import Project from '../Project/Project';

const AllCompanies = () => {
	const { isLoading, roles } = useContext(SkillsContext) as ISkillsContext;

	return (
		<div id='allcompanies'>
			<div className='all-projects'>
				{!isLoading && roles && roles.length > 0 ? roles.map((role: any, index: any) => (
						role.projects && role.projects.length && role.projects.map((project: IRoleData) => (
							<Project project={project} key={project.id}/>
						))
				)) : <div>{'No Projects available'}</div> }
			</div>
		</div>
	)
}

export default AllCompanies;
