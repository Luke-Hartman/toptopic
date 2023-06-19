<script>
	import ClubCard from './club_card.svelte';

	let my_clubs = [
		{ club_name: 'test', invite_code: 'test' },
		{ club_name: 'pizza', invite_code: 'cool' }
	];
</script>

<div>
	<h1 class="h1 mb-4">My clubs</h1>
	<div class="flex">
		{#each my_clubs as club}
			<ClubCard {...club} />
		{/each}
	</div>
</div>
