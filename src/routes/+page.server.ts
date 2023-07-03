import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/config/firebase';
import { createClub, joinClub } from '$lib/server/clubs';

export async function load() {
    const snapshot = await getDocs(collection(db, 'clubs'));
    const clubs = {};
    snapshot.forEach((doc) => {
        clubs[doc.id] = doc.data().name;
    });
    return clubs
};

export const actions = {
    createClub: async ({ request }) => {
        const formData = await request.formData();
        const clubName = String(formData.get('clubName'));
        await createClub(clubName);
        return {
            success: true
        };
    },
    joinClub: async ({ request }) => {
        const formData = await request.formData();
        const inviteCode = String(formData.get('inviteCode'));
        await joinClub(inviteCode);
        return {
            success: true
        };
    }
}