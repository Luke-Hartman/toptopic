<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';
	import { clipboard } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	export let clubName = 'ERROR';
	export let inviteCode = 'ERROR';

	let buttonText = 'Copy invite code';
</script>

<div class="card p-4" style="min-width: 12rem;">
	<h2 class="h2 mb-4">{clubName}</h2>
	<div class="flex flex-col items-center space-y-2">
		<button
			class="btn btn variant-filled-primary w-full font-semibold"
			on:click={() => goto(`/club/${inviteCode}`)}>Enter</button
		>
		<button
			use:clipboard={inviteCode}
			class="btn btn-sm variant-ghost-tertiary w-full"
			on:mouseenter={() => (buttonText = inviteCode)}
			on:mouseleave={() => (buttonText = 'Copy invite code')}
		>
			<slot><FontAwesomeIcon icon={faCopy} class="mr-2" /></slot>
			<slot>{buttonText}</slot>
		</button>
	</div>
</div>
