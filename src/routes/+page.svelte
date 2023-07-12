<script>
	import CreateClub from '$lib/components/root/create_club.svelte';
	import JoinClub from '$lib/components/root/join_club.svelte';
	import ClubCard from '$lib/components/root/club_card.svelte';

	export let data;
</script>

<h1 class="h1 mb-4">My clubs</h1>
<div>
	<div class="flex flex-wrap gap-4">
		{#each Object.entries(data) as [clubId, clubName]}
			<ClubCard {clubName} {clubId} />
		{/each}
	</div>
</div>
<div class="flex space-x-8">
	<CreateClub />
	<JoinClub />
</div>
