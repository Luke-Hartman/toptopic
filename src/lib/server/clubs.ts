import { db } from "$lib/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const getClubName = async (inviteCode: string) => {
    const snapshot = await getDoc(doc(db, "clubs", inviteCode));
    if (snapshot.exists()) {
        return snapshot.data().name;
    } else {
        return null;
    }
};

export const createClub = async (clubName: string) => {
	const inviteCode = await generateInviteCode();
	await setDoc(doc(db, 'clubs', inviteCode), {
		name: clubName,
	});
};

export const joinClub = async (inviteCode: string) => {
	const randomClubName = 'generated' + inviteCode;
	await setDoc(doc(db, 'clubs', inviteCode), {
		name: randomClubName,
	});
};

const generateInviteCode = async () => {
	let code = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	while (code == '') {
		for (let i = 0; i < 4; i++) {
		code += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		if ((await getClubName(code)) != null) {
			code = '';
		}
	}
	return code;
}