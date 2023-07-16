import { createContext } from "react";
import { useState, useEffect } from "react";

import { getSkills }  from './Skills.service';

export interface SkillsInfo {
	x: string;
	y: any[];
}

export interface ISkillsContext {
	isLoading: boolean;
	skills: SkillsInfo[];
	setSkills: (skills: SkillsInfo[]) => void;
}

const skillsDefaultValue = {
	skills: [],
	setSkills: () => {}
};

export const SkillsContext = createContext({});

export const SkillsContextProvider = ({ children }: any) => {

	const [skills, setSkills] = useState(skillsDefaultValue);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getSkills().then((resp) => {
			setSkills(resp);
			setIsLoading(false);
			console.log("Skills Loaded: ", resp);
		})
	}, []);

	return (
		<SkillsContext.Provider value={{
			isLoading, skills, setSkills
		}}>
			{children}
		</SkillsContext.Provider>
	)
}

export default SkillsContextProvider;
