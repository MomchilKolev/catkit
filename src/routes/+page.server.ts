import { fail, type Actions } from '@sveltejs/kit';
import { favorite } from '../lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const res = await fetch('https://cat-fact.herokuapp.com/facts');
	const data = await res.json();
	// console.log('data', data);

	return {
		facts: data
	};
};

export const actions: Actions = {
	favorite: async ({ request }) => {
		const formData = await request.formData();
		const text = formData.get('text');
		const id = formData.get('id');

		favorite({ text, id });

		return { success: true };
	}
};
