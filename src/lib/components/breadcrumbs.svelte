<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faHouse } from '@fortawesome/free-solid-svg-icons';
	import { page } from '$app/stores';

	let clubName, inviteCode, meetingCode, meetingDate;

	$: {
		({ clubName, inviteCode, meetingCode, meetingDate } = $page.data);
	}
</script>

<ol class="breadcrumb">
	<li class="crumb"><a class="anchor" href="/"><FontAwesomeIcon icon={faHouse} /></a></li>
	{#if clubName && inviteCode}
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		{#if meetingCode && meetingDate}
			<li class="crumb"><a class="anchor" href={`/clubs/${inviteCode}`}>{clubName}</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
			<li class="crumb">{meetingDate}</li>
		{:else}
			<li class="crumb">{clubName}</li>
		{/if}
	{/if}
</ol>
{JSON.stringify($page.data)}
