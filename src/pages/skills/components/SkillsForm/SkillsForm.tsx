import './SkillsForm.scss';

import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import { FormRenderer } from '@data-driven-forms/react-form-renderer';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import { componentTypes } from '@data-driven-forms/react-form-renderer';

import { useContext } from 'react';
import { SkillsContext, ISkillsContext } from '../../SkillsContext';

const SkillsForm = () => {
	const { skills, setSkills } = useContext(SkillsContext) as ISkillsContext;

	const schema = {
		fields: [
			{
				component: componentTypes.TEXT_FIELD,
				name: 'skill',
				label: 'Add Skill',
				isRequired: true,
				validate: [{ type: 'required' }]
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'from',
				label: 'from date'
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'to',
				label: 'to date'
			}
		]
	};

	const saveSkills = (values: any) => {
		console.log("SkillsForm - updating Context: ", values);
		setSkills(values);
	};

	return (
		<div id="skills-form">
			<div className="content">
				<FormRenderer
					schema={schema}
					componentMapper={componentMapper}
					FormTemplate={FormTemplate}
					onSubmit={(values) => saveSkills(values)}
				/>
			</div>
		</div>
	)
}

export default SkillsForm;
