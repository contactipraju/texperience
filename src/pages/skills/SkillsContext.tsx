import { createContext } from "react";
import { useState, useEffect } from "react";

import { getExperiences }  from './Skills.service';

export interface SkillsInfo {
	x: string;
	y: any[];
}
export interface TenureInfo {
	x: string;
	x2: any[];
}

export interface ISkillsContext {
	isLoading: boolean;
	skills: SkillsInfo[];
	setSkills: (skills: SkillsInfo[]) => void;
	tenure: XAxisAnnotations[];
	setTenure: (tenure: XAxisAnnotations[]) => void;
	roles: any[];
	setRoles: (roles: any[]) => void;
}

const skillsDefaultValue = {
	skills: [],
	setSkills: () => {}
};

const tenureDefaultValue = {
	tenure: [],
	setTenure: () => {}
};

const rolesDefaultValue = {
	roles: [],
	setRoles: () => {}
};

export const SkillsContext = createContext({});

export const SkillsContextProvider = ({ children }: any) => {

	const [isLoading, setIsLoading] = useState(true);
	const [skills, setSkills] = useState(skillsDefaultValue);
	const [tenure, setTenure] = useState(tenureDefaultValue);
	const [roles, setRoles]   = useState(rolesDefaultValue);

	useEffect(() => {
		getExperiences().then((resp) => {
			setSkills(resp.skills);
			setTenure(resp.tenure);
			setRoles(resp.roles);
			setIsLoading(false);
			console.log("Experiences Loaded: ", resp);
		})
	}, []);

	return (
		<SkillsContext.Provider value={{
			isLoading, skills, setSkills, tenure, setTenure, roles, setRoles
		}}>
			{children}
		</SkillsContext.Provider>
	)
}

export default SkillsContextProvider;
