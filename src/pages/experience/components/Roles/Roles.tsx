import './Roles.scss';

import { IRoleData } from '../../Experience.interfaces';

import Project from '../Project/Project';

const Roles = (props: any) => {
	const { role } = props;

	return (
		<div className='role' key={role.company.toString()}>
			<div className='role-designation'>{role.designation}</div>
			<div className='role-description'>{role.description}</div>
			<div className='role-period'>{role.period}</div>

			{role['skills'] && role['skills'].length > 0 &&
				<div className='role-skills'>
					<span className='skills-heading'>Skills: </span>
					{role['skills']!.map((skill: any) => (
						<span className='skill' key={skill.skill.toString()}>{skill.skill}</span>
					))}
				</div>
			}

			<div id='role-projects'>
				{role.projects && role.projects.length > 0 ? role.projects.map((project: IRoleData) => (
					<Project project={project} key={project.id}/>
				)) : <div>{'No projects available'}</div> }
			</div>
		</div>
	)
}

export default Roles;
