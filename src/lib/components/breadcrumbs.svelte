<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faHouse } from '@fortawesome/free-solid-svg-icons';
	import { page } from '$app/stores';

	let clubName: string, clubId: string, meetingId: string, meetingDate: string;

	$: {
		({ clubName, clubId, meetingId, meetingDate } = $page.data);
	}
</script>

<ol class="breadcrumb">
	<li class="crumb"><a class="anchor" href="/"><FontAwesomeIcon icon={faHouse} /></a></li>
	{#if clubName && clubId}
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		{#if meetingId && meetingDate}
			<li class="crumb"><a class="anchor" href={`/club/${clubId}`}>{clubName}</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
			<li class="crumb">{meetingDate}</li>
		{:else}
			<li class="crumb">{clubName}</li>
		{/if}
	{/if}
</ol>
