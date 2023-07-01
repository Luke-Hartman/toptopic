import { get } from 'svelte/store';
import { clubs } from '$lib/stores';

export function load({ params }) {
	console.log('params', params);
	console.log('get(clubs)', get(clubs));
	return {
		inviteCode: params.inviteCode,
		clubName: get(clubs)[params.inviteCode]
	};
}
