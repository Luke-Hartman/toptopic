<script>
	import CreateClub from '$lib/components/root/create_club.svelte';
	import JoinClub from '$lib/components/root/join_club.svelte';
	import MyClubs from '$lib/components/root/my_clubs.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-8">
		<h1 class="h1 mb-4">My clubs</h1>
		<MyClubs />
		<div class="flex space-x-8">
			<CreateClub />
			<JoinClub />
		</div>
	</div>
</div>
