import { db } from "$lib/config/firebase";
import { Timestamp, addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";

/**
 * A meeting is when club members vote on topics.
 * 
 * This interface matches the meeting documents on Firestore.
 */
export interface Meeting {
    id: string;
    date: Date;
}

/**
 * Creates a new meeting for a club.
 *  
 * @param clubId The invite code of the club.
 */
export const createMeeting = async (clubId: string) => {
    await addDoc(collection(db, "clubs", clubId, "meetings"), {
        date: Timestamp.fromDate(new Date()),
    });
};

/**
 * Gets all meetings for a club.
 * 
 * @param clubId The club's ID.
 * @returns An array of meetings.
 */
export const getAllMeetings = async (clubId: string) => {
	const snapshot = await getDocs(query(collection(db, "clubs", clubId, "meetings"), orderBy("date", "desc")));
    const meetings: Meeting[] = [];
    snapshot.forEach((doc) => {
        meetings.push(
            {
                id: String(doc.id),
                date: doc.data().date.toDate(),
            }
        );
	});
	return meetings;
};