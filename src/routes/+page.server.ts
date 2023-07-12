import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/config/firebase';
import { createClub, joinClub } from '$lib/server/clubs';

export async function load() {
    const snapshot = await getDocs(collection(db, 'clubs'));
    const clubs: Record<string, string> = {};
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
        const clubId = String(formData.get('clubId'));
        await joinClub(clubId);
        return {
            success: true
        };
    }
}