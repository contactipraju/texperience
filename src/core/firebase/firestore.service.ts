
import axios from 'axios';
import { logEvent }  from 'firebase/analytics';

import { firestore } from "./firebase";
import { addDoc, collection } from "@firebase/firestore";

import { analytics } from '../firebase/firebase';

export async function getUserData() {
	const user = await axios.get('http://ip-api.com/json');
	return user.data;
}

export async function LogEvent(type: any, data: any) {
	const user = await getUserData();

	// Log to Firebase Analytics:
	logEvent(analytics, type, user);

	// Log into DB:
	user['_data'] = data;
	logEventToDB(type, user);
}

export const logEventToDB = (type: string, data: any) => {
	const ref = collection(firestore, type);

	try {
		addDoc(ref, data)
	} catch(err) {
		console.log(err)
	}
}

export async function saveDownload(e: any) {
	const user = await getUserData();
	user['_url'] = e.target.href;
	saveDownloadToDB(user);
}

const saveDownloadToDB = (load: any) => {
	const ref = collection(firestore, "resume_downloads")

	try {
		addDoc(ref, load)
	} catch(err) {
		console.log(err)
	}
}
