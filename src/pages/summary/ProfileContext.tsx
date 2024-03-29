import { createContext } from "react";
import { useState, useEffect } from "react";

import { getProfile }  from './Profile.service';

export interface ProfileInfo {
	name: string;
	contact: string;
	email: string;
	linkedin: string;
	github: string;
	website: string;
}

export interface IProfileContext {
	isLoading: boolean;
	profile: ProfileInfo;
	setProfile: (profile: ProfileInfo) => void;
}

const profileDefaultValue = {
	profile: {name: "", contact: "", email: "", linkedin: "", github: ""},
	setProfile: () => {}
};

export const ProfileContext = createContext({});

export const ProfileContextProvider = ({ children }: any) => {

	const [profile, setProfile] = useState(profileDefaultValue);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getProfile().then((resp) => {
			setProfile(resp.data);
			setIsLoading(false);
		})
	}, []);

	return (
		<ProfileContext.Provider value={{
			isLoading, profile, setProfile
		}}>
			{children}
		</ProfileContext.Provider>
	)
}

export default ProfileContextProvider;
