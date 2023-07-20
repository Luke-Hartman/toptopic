<script lang="ts">
	import CopyInviteCode from '$lib/components/copy_invite_code.svelte';
	import CreateMeeting from '$lib/components/root/club/create_meeting.svelte';
	import MeetingCard from '$lib/components/root/club//meeting_card.svelte';
	import { db } from '$lib/config/firebase.js';
	import type { Meeting } from '$lib/server/meetings.js';
	import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
	import { setContext } from 'svelte';
	import { readable } from 'svelte/store';

	export let data;
	let { clubId: clubId, clubName, loadedMeetings } = data;

	const meetings = readable(loadedMeetings, (set) => {
		const unsubscribe = onSnapshot(
			query(collection(db, 'clubs', clubId, 'meetings'), orderBy('date', 'desc')),
			(snapshot) => {
				const value: Meeting[] = [];
				snapshot.forEach((doc) => {
					value.push({ id: doc.id, date: doc.data().date.toDate() });
				});
				set(value);
			}
		);
		return unsubscribe;
	});
	console.log('clubId from club page', clubId);
	setContext('club', { id: clubId, name: clubName });
</script>

<h1 class="h1">{clubName}</h1>
<div class="max-w-[70%]">
	<CopyInviteCode {clubId} />
</div>

<h2 class="h2 mb-4">Meetings</h2>

<CreateMeeting />

<div class="flex flex-wrap gap-4">
	{#each $meetings as meeting}
		<div class="item">
			<MeetingCard {meeting} />
		</div>
	{/each}
</div>
