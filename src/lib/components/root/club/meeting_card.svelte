<script lang="ts">
	import type { Meeting } from '$lib/server/meetings.js';

	export let meeting: Meeting;

	const prettyDate = (date: Date) => {
		return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
	};
</script>

<div class="card p-4 mb-4">
	<h3 class="h3">{prettyDate(meeting.date)}</h3>
	<p>
		{meeting.id}
	</p>
</div>
