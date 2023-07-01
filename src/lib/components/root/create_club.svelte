<script>
	import { clubNameAlreadyExists, createClub } from '$lib/commands/clubs';

	let clubName = '';
	let errorMessage = '';
	let isFormSubmitted = false;

	const submitForm = () => {
		isFormSubmitted = true;
		if (clubName.trim() === '') {
			errorMessage = 'Club name cannot be empty';
		} else if (clubNameAlreadyExists(clubName)) {
			errorMessage = 'Club name already exists';
		} else {
			console.log('creating club: ' + clubName);
			createClub(clubName);
			errorMessage = '';
			clubName = '';
		}
	};
</script>

<div class="card p-4">
	<header class="card-header">
		<h2 class="h2">Create a club</h2>
	</header>
	<form on:submit|preventDefault={submitForm}>
		<input
			type="text"
			placeholder="Club name"
			bind:value={clubName}
			class="input mt-4 mb-2"
			class:input-error={errorMessage && isFormSubmitted}
		/>
		{#if errorMessage && isFormSubmitted}
			<p class="text-error-500-400-token">{errorMessage}</p>
		{/if}
		<div class="flex justify-end">
			<input type="submit" value="Create" class="btn variant-soft-secondary mt-2" />
		</div>
	</form>
</div>
