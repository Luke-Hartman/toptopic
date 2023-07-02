import { getClubName } from '$lib/server/clubs';

export function load({ params }) {
	console.log('params', params);
	return {
		inviteCode: params.inviteCode,
		clubName: getClubName(params.inviteCode),
		meetingCode: params.meetingCode,
		meetingDate: '2020-01-01'
	};
}
