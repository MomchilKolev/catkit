import { fail, type Actions } from '@sveltejs/kit';
import { getFavorites } from '../../lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = await getFavorites();
	console.log('data', data);

	return {
		facts: data
	};
};
