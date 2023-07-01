<script>
	import ClubCard from './club_card.svelte';
	import { clubs } from '$lib/stores';
</script>

<div>
	<div class="flex flex-wrap gap-4">
		{#each Object.entries($clubs) as [inviteCode, clubName]}
			<ClubCard {clubName} {inviteCode} />
		{/each}
	</div>
</div>
