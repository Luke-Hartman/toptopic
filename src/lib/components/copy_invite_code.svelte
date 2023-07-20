<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';
	import { clipboard } from '@skeletonlabs/skeleton';

	export let clubId: string;
	export let maxFit: boolean = false;
	let buttonText = 'Copy invite code';
</script>

<button
	use:clipboard={clubId}
	class="btn btn-sm variant-ghost-tertiary"
	class:w-36={!maxFit}
	class:w-full={maxFit}
	on:mouseenter={() => (buttonText = clubId)}
	on:mouseleave={() => (buttonText = 'Copy invite code')}
>
	<slot><FontAwesomeIcon icon={faCopy} class="mr-2" /></slot>
	<slot>{buttonText}</slot>
</button>
