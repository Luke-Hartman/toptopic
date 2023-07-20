import { createMeeting } from "$lib/server/meetings";

export const actions: import('./$types').Actions = {
	createMeeting: async ({ request }) => {
		const formData = await request.formData();
		const clubId = String(formData.get('clubId'));
		console.log("clubId", clubId);
		await createMeeting(clubId);
		return {
			success: true,
		};
	}
};