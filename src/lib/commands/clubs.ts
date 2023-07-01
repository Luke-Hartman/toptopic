import { clubs } from '../stores.js';
import { get } from 'svelte/store';

function generateInviteCode() {
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

export const createClub = (clubName: string) => {
	// inviteCode should be generated on the backend
	// checking whether the name/inviteCode is already taken should be done on the backend
	const inviteCode = generateInviteCode();
	clubs.update((currentClubs) => {
		return { ...currentClubs, [inviteCode]: clubName };
	});
	console.log(get(clubs));
};


export const joinClub = async (inviteCode: string) => {
	const randomClubName = generateInviteCode();
	clubs.update((currentClubs) => {
		return { ...currentClubs, [inviteCode]: randomClubName };
	});
	return true;
};

export const clubNameAlreadyExists = (clubName: string) => {
	return Object.values(get(clubs)).includes(clubName);
};