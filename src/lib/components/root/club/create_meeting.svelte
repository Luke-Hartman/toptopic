<script lang="ts">
	import { enhance } from '$app/forms';
	export let clubId: string;
</script>

<form method="POST" action="?/createMeeting" use:enhance>
	<input type="text" name="clubId" value={clubId} hidden />
	<input
		type="submit"
		value="Create meeting"
		class="btn variant-filled-primary font-semibold mt-2"
	/>
</form>
