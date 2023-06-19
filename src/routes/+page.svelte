<script>
	import CreateClub from '$lib/components/clubs/create_club.svelte';
	import JoinClub from '$lib/components/clubs/join_club.svelte';
	import MyClubs from '$lib/components/clubs/my_clubs.svelte';
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-8">
		<div class="flex space-x-8">
			<CreateClub />
			<JoinClub />
		</div>
		<MyClubs />
	</div>
</div>
