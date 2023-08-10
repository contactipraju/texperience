
import axios from 'axios';
import { logEvent }  from 'firebase/analytics';

import { firestore } from "./firebase";
import { addDoc, collection } from "@firebase/firestore";

import { analytics } from '../firebase/firebase';

function isLocalHost() {
	return (["localhost", "127.0.0.1", ""].includes(window.location.hostname));
}

function isMyIp(ipAddress: string) {
	return (["125.209.150.67"].includes(ipAddress));
}

function getUserDataUrl() {
	// Since Firebase only allows connections to https,
	// we use a different api though it provides less information
	return isLocalHost() ? 'http://ip-api.com/json' : 'https://api.db-ip.com/v2/free/self';
}

async function getUserData() {
	const user = await axios.get(getUserDataUrl());
	return {...user.data, _time: new Date()};
}

function logEventToDB(_type: string, user: any) {
	let type = _type;
	type += isLocalHost() ? "_local" : "";
	type += isMyIp(user['ipAddress']) ? "_mine" : "";

	const ref = collection(firestore, type);

	try {
		addDoc(ref, user);
	} catch(err) {
		console.log(err);
	}
}

export async function LogEvent(url: any, type: string) {
	const user = await getUserData();

	user['_url'] = url;

	// Log to Firebase Analytics, except download events
	if (type.localeCompare('resume-downloads')) {
		logEvent(analytics, type, user);
	}

	// Log into DB:
	logEventToDB(type, user);
}
