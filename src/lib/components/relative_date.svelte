<script lang="ts">
	import { prettyDate, prettyTime } from '$lib/utils';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { DateTime } from 'luxon';
	import { onMount, afterUpdate } from 'svelte';

	export let date: Date;

	let displayDate = new Date(date);

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'popupHover',
		placement: 'bottom'
	};

	function getInterval() {
		const diffInSeconds = (new Date().getTime() - date.getTime()) / 1000;
		if (diffInSeconds < 60) {
			return 15 * 1000;
		} else if (diffInSeconds < 3600) {
			return 60 * 1000;
		} else {
			return 3600 * 1000;
		}
	}

	let intervalId: number;
	function updateDate() {
		displayDate = new Date(date);
	}
	onMount(() => {
		intervalId = window.setInterval(updateDate, getInterval());
		return () => clearInterval(intervalId);
	});

	afterUpdate(() => {
		clearInterval(intervalId);
		intervalId = window.setInterval(updateDate, getInterval());
	});
</script>

<p class="text-sm [&>*]:pointer-events-none" use:popup={popupHover}>
	{DateTime.fromJSDate(displayDate).toRelative()}
</p>

<div class="card p-2 variant-filled-tertiary arrow" data-popup="popupHover">
	<p>{prettyTime(displayDate)}</p>
</div>
