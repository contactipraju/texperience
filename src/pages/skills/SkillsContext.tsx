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
}

const skillsDefaultValue = {
	skills: [],
	setSkills: () => {}
};

const tenureDefaultValue = {
	tenure: [],
	setTenure: () => {}
};

export const SkillsContext = createContext({});

export const SkillsContextProvider = ({ children }: any) => {

	const [isLoading, setIsLoading] = useState(true);
	const [skills, setSkills] = useState(skillsDefaultValue);
	const [tenure, setTenure] = useState(tenureDefaultValue);

	useEffect(() => {
		getExperiences().then((resp) => {
			setSkills(resp.skills);
			setTenure(resp.tenure);
			setIsLoading(false);
			console.log("Experiences Loaded: ", resp);
		})
	}, []);

	return (
		<SkillsContext.Provider value={{
			isLoading, skills, setSkills, tenure, setTenure
		}}>
			{children}
		</SkillsContext.Provider>
	)
}

export default SkillsContextProvider;
