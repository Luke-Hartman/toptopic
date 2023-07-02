import { db } from "$lib/config/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getClubName = async (inviteCode: string) => {
    const snapshot = await getDoc(doc(db, "clubs", inviteCode));
    if (snapshot.exists()) {
        return snapshot.data().name;
    } else {
        return null;
    }
};