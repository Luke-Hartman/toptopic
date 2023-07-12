import { createMeeting } from "$lib/server/meetings";

export const actions = {
	createMeeting: async ({ request }) => {
		const formData = await request.formData();
		const clubId = String(formData.get('clubId'));
		await createMeeting(clubId);
		return {
			success: true,
		};
	}
};