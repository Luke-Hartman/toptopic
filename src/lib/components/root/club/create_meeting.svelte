<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Club } from '$lib/server/clubs';
	import { getContext } from 'svelte';

	const club: Club = getContext('club');
</script>

<form
	method="POST"
	action="?/createMeeting"
	use:enhance={({ formData }) => {
		formData.set('clubId', club.id);
	}}
>
	<input
		type="submit"
		value="Create meeting"
		class="btn variant-filled-secondary font-semibold mt-2"
	/>
</form>
