<script>
	import { goto } from '$app/navigation';
	import CopyInviteCode from '$lib/components/copy_invite_code.svelte';

	export let clubName = 'ERROR';
	export let clubId = 'ERROR';

	let buttonText = 'Copy invite code';
</script>

<div class="card p-4" style="min-width: 12rem;">
	<h2 class="h2 mb-4">{clubName}</h2>
	<div class="flex flex-col items-center space-y-2">
		<button
			class="btn btn variant-filled-primary w-full font-semibold"
			on:click={() => goto(`/club/${clubId}`)}>Enter</button
		>
		<CopyInviteCode {clubId} maxFit />
	</div>
</div>
