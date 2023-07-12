import { db } from "$lib/config/firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

/**
 * A club is a group of people who meet regularly.
 * 
 * Note that Club IDs are referred to as "invite codes" in the UI.
 * 
 * This interface matches the club documents on Firestore.
 */
export interface Club {
    id: string;
    name: string;
}

/**
 * Gets the name of a club from its ID.
 * 
 * @param id The ID of the club.
 * @returns The name of the club, or null if the club does not exist.
 */
export const getClubName = async (id: string) => {
    const snapshot = await getDoc(doc(db, "clubs", id));
    if (snapshot.exists()) {
        return snapshot.data().name;
    } else {
        return null;
    }
};

/**
 * Creates a new club.
 * 
 * @param clubName The name of the club.
 */
export const createClub = async (clubName: string) => {
	const clubId = await generateClubId();
	await setDoc(doc(db, 'clubs', clubId), {
		name: clubName,
	});
};

/**
 * Joins a club with a given id.
 * 
 * Club ids are 4-character strings, and are intended to be
 * easy for users to type in.
 * 
 * @param id The club's ID.
 */
export const joinClub = async (id: string) => {
	const randomClubName = 'generated' + id;
	await setDoc(doc(db, 'clubs', id), {
		name: randomClubName,
	});
};

/**
 * Generates a random unused club ID.
 * 
 * @returns A random 4-character string that is not currently in use.
 */
const generateClubId = async () => {
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
};