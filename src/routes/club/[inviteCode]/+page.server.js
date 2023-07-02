import { getClubName } from '$lib/server/clubs';

export async function load({ params }) {
	return {
		inviteCode: params.inviteCode,
		clubName: getClubName(params.inviteCode)
	};
}
