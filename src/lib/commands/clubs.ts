import { doc, setDoc } from 'firebase/firestore';
import { clubs } from '../stores.js';
import { get } from 'svelte/store';
import { db } from '$lib/config/firebase.js';

function generateInviteCode() {
	// TODO: move this to the backend
	let code = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	while (code == '') {
		for (let i = 0; i < 4; i++) {
		code += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		if (code in get(clubs)) {
			code = '';
		}
	}
	return code;
}

export const createClub = async (clubName: string) => {
	// TODO: move this to the backend
	const inviteCode = generateInviteCode();
	await setDoc(doc(db, 'clubs', inviteCode), {
		name: clubName,
	});
	console.log(get(clubs));
};


export const joinClub = async (inviteCode: string) => {
	// TODO: move this to the backend
	const randomClubName = 'generated' + inviteCode;
	await setDoc(doc(db, 'clubs', inviteCode), {
		name: randomClubName,
	});
	return true;
};

export const clubNameAlreadyExists = (clubName: string) => {
	return Object.values(get(clubs)).includes(clubName);
};