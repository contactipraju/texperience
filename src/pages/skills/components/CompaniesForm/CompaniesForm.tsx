import './CompaniesForm.scss';

import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import { FormRenderer } from '@data-driven-forms/react-form-renderer';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import { componentTypes } from '@data-driven-forms/react-form-renderer';

import { useContext } from 'react';
import { SkillsContext, ISkillsContext } from '../../SkillsContext';

const CompaniesForm = () => {
	const { tenure, setTenure } = useContext(SkillsContext) as ISkillsContext;

	const schema = {
		fields: [
			{
				component: componentTypes.TEXT_FIELD,
				name: 'name',
				label: 'Company name',
				isRequired: true,
				validate: [{ type: 'required' }]
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'from',
				label: 'from date',
				isRequired: true,
				validate: [{ type: 'required' }]
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'to',
				label: 'to date',
				isRequired: true,
				validate: [{ type: 'required' }]
			}
		]
	};

	const saveCompanies = (values: any) => {
		console.log("CompaniesForm - updating Context: ", values);
		setTenure(values);
	};

	return (
		<div id="skills-form">
			<div className="content">
				<FormRenderer
					schema={schema}
					componentMapper={componentMapper}
					FormTemplate={FormTemplate}
					onSubmit={(values) => saveCompanies(values)}
				/>
			</div>
		</div>
	)
}

export default CompaniesForm;
