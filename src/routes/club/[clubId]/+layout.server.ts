import { getClubName } from '$lib/server/clubs';
import { getAllMeetings } from '$lib/server/meetings';

export async function load({ params }) {
	return {
		clubId: params.clubId,
		clubName: getClubName(params.clubId),
		loadedMeetings: getAllMeetings(params.clubId),
	};
}