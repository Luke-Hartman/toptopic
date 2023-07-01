import { get } from 'svelte/store';
import { clubs } from '$lib/stores';

export function load({ params }) {
	console.log('params', params);
	return {
		inviteCode: params.inviteCode,
		clubName: get(clubs)[params.inviteCode],
		meetingCode: params.meetingCode,
		meetingDate: '2020-01-01'
	};
}
