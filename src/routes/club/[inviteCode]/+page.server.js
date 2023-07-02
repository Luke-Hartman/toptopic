import { get } from 'svelte/store';
import { clubs } from '$lib/stores';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/config/firebase';

export async function load({ params }) {
	console.log('params', params);
	console.log('get(clubs)', get(clubs));

	const querySnapshot = await getDocs(collection(db, 'clubs'));
	querySnapshot.forEach((doc) => {
		console.log(`${doc.id} => ${doc.data()}`);
	});
	return {
		inviteCode: params.inviteCode,
		clubName: get(clubs)[params.inviteCode]
	};
}
