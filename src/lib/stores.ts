import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '$lib/config/firebase';
import { readable } from 'svelte/store';


// Store for the clubs collection

export const clubs = readable({}, (set) => {
	const unsubscribe = onSnapshot(collection(db, 'clubs'), (snapshot) => {
		const value = {};
		snapshot.forEach((doc) => {
			value[doc.id] = doc.data().name;
		});
		set(value);
	});
	return unsubscribe;
});