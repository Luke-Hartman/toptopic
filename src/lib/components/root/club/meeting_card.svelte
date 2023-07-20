<script lang="ts">
	import RelativeDate from '$lib/components/relative_date.svelte';
	import type { Club } from '$lib/server/clubs';
	import type { Meeting } from '$lib/server/meetings.js';
	import { getContext } from 'svelte';
	import { prettyDate } from '$lib/utils';

	export let meeting: Meeting;

	const club: Club = getContext('club');
</script>

<div class="card p-4 mb-2">
	<header class="card-header">
		<h2 class="h2">{prettyDate(meeting.date)}</h2>
	</header>
	<div class="flex flex-col items-center m-4">
		<a class="btn variant-filled-primary py-1 px-4" href={`/club/${club.id}/meeting/${meeting.id}`}
			>Enter</a
		>
	</div>
	<footer class="card-footer">
		<p class="text-sm">Created by Luke</p>
		<RelativeDate date={meeting.date} />
	</footer>
</div>
