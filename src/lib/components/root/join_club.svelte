<script>
	let inviteCode = '';
	let errorMessage = '';
	let isFormSubmitted = false;

	const submitForm = () => {
		isFormSubmitted = true;
		if (inviteCode.trim() === '') {
			errorMessage = 'Invite code cannot be empty';
		} else if (false) {
			// TODO
			errorMessage = 'Invite code not found';
		} else {
			console.log('joining club: ' + inviteCode);
			errorMessage = '';
		}
	};
</script>

<div class="card p-4">
	<header class="card-header">
		<h2 class="h2">Join a club</h2>
	</header>
	<form on:submit|preventDefault={submitForm}>
		<input
			type="text"
			placeholder="Invite code"
			bind:value={inviteCode}
			class="input mt-4 mb-2"
			class:input-error={errorMessage && isFormSubmitted}
		/>
		{#if errorMessage && isFormSubmitted}
			<p class="text-error-500-400-token">{errorMessage}</p>
		{/if}
		<div class="flex justify-end">
			<input type="submit" value="Join" class="btn variant-soft-secondary mt-2" />
		</div>
	</form>
</div>
