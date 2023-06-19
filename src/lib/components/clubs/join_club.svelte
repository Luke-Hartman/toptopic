<script>
	let invite_code = '';
	let valid_codes = ['test'];
	let errorMessage = '';
	let isFormSubmitted = false;

	const submitForm = () => {
		isFormSubmitted = true;
		if (invite_code.trim() === '') {
			errorMessage = 'Invite code cannot be empty';
		} else if (valid_codes.includes(invite_code)) {
			errorMessage = 'Invite code already exists';
		} else {
			console.log('joining club: ' + invite_code);
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
			bind:value={invite_code}
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
